// In your backend (e.g., in `routes/gpt.js` or similar)

const express = require('express');
const { OpenAI } = require('openai');
const router = express.Router();

// Initialize OpenAI with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post('/generate-ad', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 100,
      temperature: 0.7,
    });

    const adText = response.choices[0].message.content.trim();
    res.json({ adText });
  } catch (error) {
    console.error('Error generating ad with GPT-3:', error);
    res.status(500).json({ error: 'Failed to generate ad' });
  }
});

module.exports = router;
