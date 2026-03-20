# Use official Node LTS image
FROM node:22-alpine

# Install bash & curl for Infisical CLI setup
RUN apk add --no-cache bash curl

# Set working directory
WORKDIR /big-jumps-api

# Copy package.json and package-lock.json (or yarn.lock)
COPY big-jumps-4-tods/package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy app source code
COPY . .

# Expose the port your Node app will run on
EXPOSE 5000

# Use CMD with Infisical, secrets come from environment
CMD ["sh", "-c", "npx knex migrate:latest --env production --knexfile big-jumps-4-tods/knexfile.js && node big-jumps-4-tods/myapp/app.js"]
