# Dockerfile for backend
FROM node:14-alpine
WORKDIR /app
COPY Backend/package*.json ./
RUN npm install
COPY backend/ ./
RUN npm run compile
EXPOSE 5000
CMD ["npm", "run", "dev"]