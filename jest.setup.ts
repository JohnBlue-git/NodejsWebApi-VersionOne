import http from 'http';
import app from './src/app';
import { AddressInfo } from 'net';

let server: http.Server;

beforeAll(async () => {
  await new Promise<void>((resolve) => {
    server = http.createServer(app);
    server.listen(1999, () => {
      const { port } = server.address() as AddressInfo;
      console.log(`✅ Test server running on http://localhost:${port}`);
      // Ensure server is ready before tests start
      resolve();
    });
  });
});

afterAll(async () => {
  await new Promise<void>((resolve) => {
    server.close(() => {
      console.log('🛑 Test server closed');
      resolve();
    });
  });
});
