FROM node:18-alpine
WORKDIR /usr/src/app
COPY package.json server.js ./
RUN npm init -y 2>/dev/null || true
CMD ["node", "server.js"]
