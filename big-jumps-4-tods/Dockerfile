# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /big-jumps-4-tods

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Expose port 5000 (matches Express PORT)
EXPOSE 5000

# Start Express app
CMD ["node", "myapp/app.js"]
