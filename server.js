const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/route');

const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors()); // 
app.use(express.json()); 


// Routes
 app.use('/api/v1', router);


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

