FROM node:22-alpin

WORKDIR /app
COPY package.json server.js ./

EXPOSE 3000
CMD ["node", "server.js"]
