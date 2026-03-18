# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /admin

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend files
COPY . .

RUN npm run build
# Start frontend app
CMD ["npm", "start", "--", "-p", "10000"]
