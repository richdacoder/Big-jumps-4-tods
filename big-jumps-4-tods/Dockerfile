# Use official Node LTS image
FROM node:20-alpine

# Install bash & curl for Infisical CLI setup
RUN apk add --no-cache bash curl

# Install Infisical CLI
RUN curl -1sLf 'https://dl.cloudsmith.io/public/infisical/infisical-cli/setup.alpine.sh' | bash && \
    apk add infisical

# Set working directory
WORKDIR /big-jumps-4-tods

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy app source code
COPY . .

# Expose the port your Node app will run on
EXPOSE 5000

# Use CMD with Infisical, secrets come from environment
CMD ["infisical", "run", "--projectId", "0eaba646-92c7-4cf1-8102-aabb7f2e9c07", "--env=prod", "--", "node", "myapp/app.js"]
