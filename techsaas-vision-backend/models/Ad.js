const mongoose = require('mongoose');

const AdSchema = new mongoose.Schema({
  url: String,
  adText: String, // adText should be a string
  adType: String,
  tone: String,
  primaryColor: String,
  secondaryColor: String,
  accentColor: String,
  themeName: String,
  qrCodeUrl: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Ad', AdSchema);
