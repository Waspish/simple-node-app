const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js!' });
});

// Экспортируем app для тестов
module.exports = app;

// Запускаем сервер только если файл запущен напрямую
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}