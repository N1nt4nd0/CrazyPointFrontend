FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG AVATARS_LIST_API
ARG STREAM_CHART_DAILY_API
ARG STREAM_DAYS_API
ARG STREAMERS_LIST_API

RUN echo "REACT_APP_AVATARS_LIST_API=${AVATARS_LIST_API}" > .env
RUN echo "REACT_APP_STREAM_CHART_DAILY_API=${STREAM_CHART_DAILY_API}" >> .env
RUN echo "REACT_APP_STREAM_DAYS_API=${STREAM_DAYS_API}" >> .env
RUN echo "REACT_APP_STREAMERS_LIST_API=${STREAMERS_LIST_API}" >> .env

RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]