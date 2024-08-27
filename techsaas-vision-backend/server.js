const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const axios = require('axios');
const cheerio = require('cheerio');
const { OpenAI } = require('openai');

// Load environment variables
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

// Routes
const gptRoutes = require('./routes/gpt');
const adRoutes = require('./routes/ad');
const contactRoutes = require('./routes/contact');

app.use('/api/gpt', gptRoutes);
app.use('/api/ad', adRoutes);
app.use('/api/contact', contactRoutes);

// Fetch metadata route
app.post('/api/fetch-metadata', async (req, res) => {
  const { url } = req.body;

  // Log incoming request data for debugging
  console.log('Fetching metadata for URL:', url);

  try {
    const response = await axios.get(url, {
      httpsAgent: new (require('https').Agent)({
        rejectUnauthorized: false,
      }),
    });

    const html = response.data;
    const $ = cheerio.load(html);
    const title = $('title').text();
    const description =
      $('meta[name="description"]').attr('content') ||
      'No description available.';

    // Log fetched metadata for debugging
    console.log('Fetched metadata:', { title, description });

    res.json({ title, description });
  } catch (error) {
    console.error('Error fetching metadata:', error.message);

    // Send back a more detailed error message
    res
      .status(500)
      .json({ error: 'Failed to fetch metadata from the URL.' });
  }
});

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error('Global Error Handler:', err.stack);
  res
    .status(500)
    .send({ error: 'Something went wrong. Please try again later.' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
