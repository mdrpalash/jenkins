# Build stage: Use a slim node image to install dependencies and build the app
FROM node:18-slim AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (optional if using a build step)
RUN npm run build

# Runtime stage: Use a smaller alpine-based image for the final app
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only the built files and dependencies from the build stage
COPY --from=build /app /app

# Expose the application port (adjust as necessary)
EXPOSE 3000

# Run the app
CMD ["npm", "start"]

