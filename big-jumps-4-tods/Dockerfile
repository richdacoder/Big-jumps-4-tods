# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /big-jumps-4-tods

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Build Next.js app
RUN npm run build

# Expose port 3000
EXPOSE 5432

# Start the app
CMD ["npm", "start"]
