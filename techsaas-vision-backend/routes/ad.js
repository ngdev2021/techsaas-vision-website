// routes/ad.js

const express = require('express');
const qr = require('qrcode');
const Ad = require('../models/Ad');
const { generateAdWithGPT3 } = require('../utils/gpt3Service');

const router = express.Router();

// GET all ads
router.get('/ads', async (req, res) => {
  try {
    const ads = await Ad.find(); // Assuming `Ad` is your Mongoose model
    res.json(ads); // Ensure you are sending a JSON response
  } catch (error) {
    console.error('Error fetching ads:', error);
    res.status(500).json({ error: 'Failed to fetch ads' }); // Return JSON error response
  }
});

// Generate ad and QR code, then save to the database
router.post('/generate', async (req, res) => {
  const { title, description, adType, tone, url } = req.body;

  console.log('Request Data:', req.body);

  try {
    if (!title || !description || !adType || !tone || !url) {
      console.error('Missing required fields');
      return res
        .status(400)
        .json({ error: 'Missing required fields' });
    }

    // Generate ad using GPT-3
    const { adText, tokensUsed } = await generateAdWithGPT3(
      title,
      description,
      adType,
      tone
    );

    // Generate QR code
    const qrCodeUrl = await qr.toDataURL(url);

    // Save to database, ensure you're saving only adText
    const newAd = new Ad({
      url,
      adText: adText, // Extracting adText from the object
      adType,
      tone,
      qrCodeUrl,
      primaryColor: '#FF7E5F', // Example color, should be dynamic based on user input
      secondaryColor: '#43C6AC',
      accentColor: '#B06AB3',
    });

    await newAd.save();
    res
      .status(201)
      .json({ message: 'Ad created successfully', ad: newAd });
  } catch (error) {
    console.error('Error generating ad:', error);
    res.status(500).json({ error: 'Failed to generate ad' });
  }
});

// Preview ad without saving to the database
// Logging inside preview route to ensure proper data
// routes/ad.js

router.post('/preview', async (req, res) => {
  const { title, description, adType, tone, url } = req.body;

  // Logging request data to check incoming fields
  console.log('Preview Request Data:', req.body);

  try {
    if (!title || !description || !adType || !tone || !url) {
      console.error('Missing required fields');
      return res
        .status(400)
        .json({ error: 'Missing required fields' });
    }

    // Generate ad using GPT-3
    const { adText, tokensUsed } = await generateAdWithGPT3(`
      Generate a ${tone} ${adType} ad for the following business:

      Title: ${title}
      Description: ${description}

      Ad:
    `);

    console.log('Ad Text Generated:', adText);

    // Generate QR code
    const qrCodeUrl = await qr.toDataURL(url);

    // Return only the adText and qrCodeUrl
    res.status(200).json({ adText, qrCodeUrl });
  } catch (error) {
    console.error('Error generating ad preview:', error);
    res.status(500).json({ error: 'Failed to generate ad preview' });
  }
});

// save ad to the database
router.post('/save', async (req, res) => {
  const { title, description, adType, tone, url } = req.body;

  try {
    if (!title || !description || !adType || !tone || !url) {
      console.error('Missing required fields');
      return res
        .status(400)
        .json({ error: 'Missing required fields' });
    }

    // Generate ad using GPT-3
    const adText = await generateAdWithGPT3(
      title,
      description,
      adType,
      tone
    );

    // Generate QR code
    const qrCodeUrl = await qr.toDataURL(url);

    // Save to database
    const newAd = new Ad({
      url,
      adText,
      adType,
      tone,
      qrCodeUrl,
      primaryColor: '#FF7E5F', // Example color, should be dynamic based on user input
      secondaryColor: '#43C6AC',
      accentColor: '#B06AB3',
    });

    await newAd.save();
    res
      .status(201)
      .json({ message: 'Ad created successfully', ad: newAd });
  } catch (error) {
    console.error('Error generating ad:', error);
    res.status(500).json({ error: 'Failed to generate ad' });
  }
});

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const ad = await Ad.findByIdAndDelete(id);

    if (!ad) {
      return res.status(404).json({ error: 'Ad not found' });
    }

    res.status(200).json({ message: 'Ad deleted successfully' });
  } catch (error) {
    console.error('Error deleting ad:', error);
    res.status(500).json({ error: 'Failed to delete ad' });
  }
});

module.exports = router;
