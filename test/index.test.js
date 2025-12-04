const request = require('supertest');
const { createServer } = require('../src/index');

describe('app1', () => {
  const app = createServer();

  it('returns health', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(res.body.service).toBe('app1');
  });

  it('echoes payload', async () => {
    const payload = { hello: 'world' };
    const res = await request(app).post('/echo').send(payload);
    expect(res.status).toBe(200);
    expect(res.body.received).toEqual(payload);
  });
});
