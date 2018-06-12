#
# This dockerfile is used only to build a new release for production
#
# docker build -t react-pendu:prod -f .docker/Dockerfile .
# docker run -d --name react-pendu -p 8080:80 react-pendu:prod

FROM nginx:alpine

COPY build /usr/share/nginx/html
