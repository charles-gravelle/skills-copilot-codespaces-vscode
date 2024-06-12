// Create web server
// 1. Import express
const express = require('express');
const path = require('path');
// 2. Create an express app
const app = express();
// 3. Define the port
const PORT = 3000;
// 4. Define a route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
// 5. Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});