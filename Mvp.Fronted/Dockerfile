# Etapa 1: Build
FROM node:20-alpine AS build-step
WORKDIR /app

# Copiar solo archivos de dependencias para aprovechar el caché de Docker
COPY package.json package-lock.json ./
RUN npm install

# Copiar el resto del código y construir
COPY . .
RUN npm run build -- --configuration production

# Etapa 2: Run (Servidor Nginx)
FROM nginx:1.25-alpine

# Copiar la configuración personalizada de Nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos construidos desde la etapa anterior
# Nota: Ajusta 'nombre-de-tu-app' según tu angular.json
COPY --from=build-step /app/dist/Mvp.Fronted /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
