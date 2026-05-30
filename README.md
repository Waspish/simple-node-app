# simple-node-app

Простой Node.js сервер на Express. Отдаёт статическую HTML-страницу и демонстрирует простой API.

## 🚀 Быстрый старт

### Локальный запуск (без Docker)

```bash
git clone https://github.com/Waspish/simple-node-app.git
cd simple-node-app
npm install
npm start
```

После запуска откройте `http://localhost:3000`

- API пример: `http://localhost:3000/api/hello` → `{"message": "Hello from Node.js!"}`

### Режим разработки (авто-перезагрузка)

```bash
npm run dev
```

### Тесты

```bash
npm test
```

## 🐳 Запуск через Docker

Если Docker Desktop установлен и запущен:

```bash
docker build -t simple-node-app .
docker run -p 3000:3000 simple-node-app
```

Или через Docker Compose:

```bash
docker-compose up --build
```

## 📁 Структура

```
simple-node-app/
├── public/          # статические файлы (index.html)
├── server.js        # основной сервер
├── package.json
├── Dockerfile
├── docker-compose.yml
├── Jenkinsfile      # CI/CD для Jenkins
└── tests/           # тесты API (supertest)
```

## 🛠 Технологии

- Node.js
- Express
- Docker / Docker Compose
- Jenkins (опционально)
