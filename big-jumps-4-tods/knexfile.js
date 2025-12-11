module.exports = {
  docker: {
    client: "pg",
    connection: {
      host: "postgres-db",        // Connect via Docker network
      port: 5432,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB
    },
    migrations: {
      directory: "./migrations"
    }
  }
};
