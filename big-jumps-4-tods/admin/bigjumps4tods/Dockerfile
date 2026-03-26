# Use official Node.js LTS image
FROM node:20-alpine

RUN apk add --no-cache tzdata
ENV TZ=America/New_York

# Set working directory inside container
WORKDIR /admin

# Copy package files and install dependencies
COPY  big-jumps-4-tods/admin/bigjumps4tods/package*.json ./
RUN npm install
RUN ls -la

# Copy the rest of the frontend files
COPY bigjumps4tods/ .

RUN npm run build
# Start frontend app
CMD ["npm", "start", "--", "-p", "10000"]
