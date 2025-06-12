# Stage 1: Build the Nuxt.js application
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml (or yarn.lock/package-lock.json)
# to leverage Docker cache
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the Nuxt.js application
# `nuxt build` generates the production-ready output
RUN npx nuxt build

# Stage 2: Serve the application with a lightweight server (e.g., Nginx or directly via Node)
# Using Node for serving the generated Nuxt app is simpler and more common
# for Nuxt static/server-rendered outputs.
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /app

# Copy only necessary files from the build stage
# The .output directory contains the generated Nuxt app
COPY --from=build /app/.output ./.output
COPY --from=build /app/package.json ./package.json

# If you have static assets in `public` directory, copy them too
COPY --from=build /app/public ./public

# Install production dependencies only if they are separate,
# otherwise, the .output already contains everything needed for runtime
# For Nuxt 3, usually `nuxi build` includes everything.
# If your app requires specific runtime dependencies not bundled,
# you might need `pnpm install --prod` here based on `package.json`.

# Expose the port Nuxt.js listens on
EXPOSE 3000

# Command to run the application
# For Nuxt 3, the .output/server/index.mjs is the entry point
CMD ["node", ".output/server/index.mjs"]

# For static site generation (if using `npx nuxt generate`),
# you might serve the `public` directory with a web server like Nginx:
# FROM nginx:alpine
# COPY --from=build /app/.output/public /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
