import request from 'supertest';

import { disconnectDb } from '../src/database/dbconnect';

import app from '../src/app';
import e from 'express';

describe('test products endpoints', () => {
  test('It should return all products', async () => {
    const response = await request(app).get('/api/products/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeType('array');
  });

  afterAll(async () => {
    await disconnectDb();
  });
});
