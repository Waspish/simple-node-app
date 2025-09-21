FROM node:16.13.1-alpine

WORKDIR /app

# Копируем файлы зависимостей primeiro
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь исходный код
COPY . .

# Открываем порт и запускаем приложение
EXPOSE 3000
CMD ["npm", "start"]