# syntax=docker/dockerfile:1.7

# --- Stage 1: build ---
FROM node:22-alpine AS build
WORKDIR /app

# Install deps in their own layer for caching.
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build.
COPY . .
RUN npm run build

# --- Stage 2: serve ---
FROM nginx:alpine AS runtime

# SPA fallback config: route unknown paths to index.html for client-side routing.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static assets.
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
