# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY big-jumps-4-tods/package*.json ./
RUN npm install

# Copy the rest of the frontend files
COPY big-jumps-4-tods/ .

RUN npm run build

# Start frontend app
CMD ["npm","run","start"]
