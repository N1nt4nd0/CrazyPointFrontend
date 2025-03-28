FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM serve/serve:latest
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 5000
CMD ["serve", "-s", "build", "-l", "5000"]