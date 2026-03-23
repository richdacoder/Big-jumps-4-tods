# Use official Node.js LTS image
FROM node:20-alpine

RUN apk add --no-cache tzdata
ENV TZ=America/New_York

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY big-jumps-4-tods/package*.json ./
RUN npm install

# Copy the rest of the frontend files
COPY big-jumps-4-tods/ .

RUN npm run build

# Start frontend app
CMD ["npm", "start", "--", "-p", "10000"]
