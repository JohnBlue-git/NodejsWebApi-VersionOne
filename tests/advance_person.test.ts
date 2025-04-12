import axios, { AxiosResponse } from 'axios';
import { Server } from 'http';
import app from '../src/app'; // your Express app
import http from 'http';

let server: Server;
const BASE_URL = 'http://localhost:1999';
const PERSON_API = '/api/advance_person';

/* The following have been replaced by jest.setup.ts

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(1999, () => {
    console.log('Test server running on http://localhost:1999');
    done();
  });
});

afterAll((done) => {
  server.close(() => {
    console.log('Test server closed');
    done();
  });
});
*/

jest.setTimeout(3000); // Set global timeout to 3 seconds

beforeAll(async () => {
  // Small delay after server setup from jest.setup.ts
  await new Promise((res) => setTimeout(res, 500));
});

describe('Person API Tests', () => {

  test('POST /api/person', async () => {
    const payload = { name: 'John Doe', age: 30 };
    const response: AxiosResponse = await axios.post(`${BASE_URL}${PERSON_API}`, payload, {
      headers: { 'Content-Type': 'application/json' }
    });
    expect(response.status).toBe(201);
  });  // First test

  test('GET /api/person', async () => {
    const response: AxiosResponse = await axios.get(`${BASE_URL}${PERSON_API}`);
    expect(response.status).toBe(200);
  });  // Second test

  test('GET /api/person/0', async () => {
    const response: AxiosResponse = await axios.get(`${BASE_URL}${PERSON_API}/0`);
    expect(response.status).toBe(200);
  });  // Third test

  test('GET /api/person/42 should return 404', async () => {
    try {
      await axios.get(`${BASE_URL}${PERSON_API}/42`);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        expect(error.response.status).toBe(404);
      } else {
        throw error; // re-throw if it's an unexpected error
      }
    }
  });  // Fourth test

  test('PATCH /api/person/0', async () => {
    const payload = { name: 'John Blue', age: 18 };
    const response: AxiosResponse = await axios.patch(`${BASE_URL}${PERSON_API}/0`, payload, {
      headers: { 'Content-Type': 'application/json' }
    });
    expect(response.status).toBe(200);
  });  // Fifth test

  test('DELETE /api/person/0', async () => {
    const response: AxiosResponse = await axios.delete(`${BASE_URL}${PERSON_API}/0`);
    expect(response.status).toBe(204);
  });  // Sixth test

  test('GET /42 should return 404', async () => {
    try {
      await axios.get(`${BASE_URL}/42`);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        expect(error.response.status).toBe(404);
      } else {
        throw error; // re-throw if it's an unexpected error
      }
    }
  });  // Seventh test

});
