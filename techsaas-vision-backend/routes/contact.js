const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route POST /api/contact
// @desc  Submit contact form
router.post('/', async (req, res) => {
  const { name, email, phone, message, service } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      message,
      service,
    });

    await newContact.save();
    res.json({ msg: 'Contact form submitted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route GET /api/contact
// @desc  Get all contact form submissions

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route DELETE /api/contact/:id
// @desc  Delete contact form submission
router.delete('/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Contact form submission deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
