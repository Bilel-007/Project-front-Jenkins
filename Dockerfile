### STAGE 1: Build ###
FROM node:16 as builder
WORKDIR app
# RUN mkdir /usr/src/app
COPY package.json ./
RUN npm install 
#--silent
#RUN npm install react-scripts -g --silent
COPY . .
RUN npm run build

### STAGE 2: Production Environment ###
FROM nginx:1.13.12-alpine
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]