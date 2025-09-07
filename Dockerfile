FROM node:18-alpine

WORKDIR /app

# Copiem package*.json primul pentru cache optimization
COPY package*.json ./

# Instalăm dependențele
RUN npm install

# Copiem restul codului
COPY . .

# Expunem portul
EXPOSE 3000

# Pentru development - folosim npm run dev
CMD ["npm", "run", "dev"]