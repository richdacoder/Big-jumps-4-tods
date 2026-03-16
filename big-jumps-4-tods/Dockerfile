# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory inside container
WORKDIR ./app

# Copy package files and install dependencies
RUN pwd
RUN ls -la
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the frontend files
COPY big-jumps-4-tods/ .
# Expose port 3000
EXPOSE 3000

# Start frontend app
CMD ["npm","run","start"]
