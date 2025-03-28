FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG REACT_APP_AVATARS_LIST_API
ARG REACT_APP_STREAM_CHART_DAILY_API
ARG REACT_APP_STREAM_DAYS_API
ARG REACT_APP_STREAMERS_LIST_API
ENV REACT_APP_AVATARS_LIST_API=${REACT_APP_AVATARS_LIST_API}
ENV REACT_APP_STREAM_CHART_DAILY_API=${REACT_APP_STREAM_CHART_DAILY_API}
ENV REACT_APP_STREAM_DAYS_API=${REACT_APP_STREAM_DAYS_API}
ENV REACT_APP_STREAMERS_LIST_API=${REACT_APP_STREAMERS_LIST_API}
RUN npm run build
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]