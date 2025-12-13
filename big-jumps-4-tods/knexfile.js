module.exports = {
  docker: {
    client: "pg",
    connection: {
      host: "postgres-db",        // Docker network
      port: 5432,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB
    },
    migrations: {
      directory: "./migrations"
    }
  },
  local: {
    client: "pg",
    connection: {
      host: "127.0.0.1",          // Local Postgres
      port: 5432,
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "yourpassword",
      database: process.env.DB_NAME || "big_jumps_db"
    },
    migrations: {
      directory: "./migrations"
    }
  }
};
