import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:1999';
const PERSON_API = '/api/person';

describe('Person API Tests', () => {

  test('POST /api/person', async () => {
    const payload = { name: 'John Doe', age: 30 };
    const response: AxiosResponse = await axios.post(`${BASE_URL}${PERSON_API}`, payload, {
      headers: { 'Content-Type': 'application/json' }
    });
    expect(response.status).toBe(201);
  }, 1);  // First test

  test('GET /api/person', async () => {
    const response: AxiosResponse = await axios.get(`${BASE_URL}${PERSON_API}`);
    expect(response.status).toBe(200);
  }, 2);  // Second test

  test('GET /api/person/0', async () => {
    const response: AxiosResponse = await axios.get(`${BASE_URL}${PERSON_API}/0`);
    expect(response.status).toBe(200);
  }, 3);  // Third test

  test('GET /api/person/42 should return 404', async () => {
    try {
      await axios.get(`${BASE_URL}${PERSON_API}/42`);
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  }, 4);  // Fourth test

  test('PATCH /api/person/0', async () => {
    const payload = { name: 'John Blue', age: 18 };
    const response: AxiosResponse = await axios.patch(`${BASE_URL}${PERSON_API}/0`, payload, {
      headers: { 'Content-Type': 'application/json' }
    });
    expect(response.status).toBe(200);
  }, 5);  // Fifth test

  test('DELETE /api/person/0', async () => {
    const response: AxiosResponse = await axios.delete(`${BASE_URL}${PERSON_API}/0`);
    expect(response.status).toBe(204);
  }, 6);  // Sixth test

  test('GET /42 should return 404', async () => {
    try {
      await axios.get(`${BASE_URL}/42`);
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  }, 7);  // Seventh test
});
