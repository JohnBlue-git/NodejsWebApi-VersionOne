import app from './app';  // Import the app from app.ts
const port: number = 1999;  // Explicitly type the port variable as a number

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
