// secrets.js
const { InfisicalClient } = require("@infisical/sdk");

const initSecrets = async () => {
  // Only run if we have the credentials
  if (!process.env.INFISICAL_CLIENT_ID || !process.env.INFISICAL_CLIENT_SECRET) {
    console.warn("⚠️ Infisical credentials missing. Skipping injection.");
    return;
  }

  try {
    const client = new InfisicalClient({
      clientId: process.env.INFISICAL_CLIENT_ID,
      clientSecret: process.env.INFISICAL_CLIENT_SECRET,
    });

    const secrets = await client.listSecrets({
      environment: process.env.NODE_ENV || "dev",
      path: "/",
    });

    secrets.forEach((s) => {
      process.env[s.secretKey] = s.secretValue;
    });

    console.log("✅ Secrets synced from Infisical");
  } catch (err) {
    console.error("❌ Infisical sync failed:", err.message);
  }
};

module.exports = initSecrets;
