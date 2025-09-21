const { describe, it } = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('../server'); // Теперь server.js экспортирует app

describe('Тесты сервера', () => {
  it('должен возвращать статус 200 на главной странице', async () => {
    const response = await request(app).get('/');
    assert.strictEqual(response.status, 200);
  });

  it('должен возвращать JSON сообщение на /api/hello', async () => {
    const response = await request(app).get('/api/hello');
    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.body.message, 'Hello from Node.js!');
  });
});