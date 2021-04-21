#Dockerfile aplicando multi-stage builds
#Stage 0
#ACÁ SE COMPILA EL PROYECTO DE PRODUCCIÓN.

ARG name=node:15.13.0-alpine3.13
FROM ${name} as builder

WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build

#Stage 1:
#Acá, se lleva el proyecto a un nginx

FROM nginx:1.19.9-alpine
COPY --from=builder /app/build/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
