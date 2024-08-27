// Expanded list of unwanted keywords including synonyms and variations
const unwantedKeywords = [
  'buy',
  'cheap',
  'best',
  'sale',
  'free',
  'limited-time',
  'exclusive',
  'click',
  'here',
  'now',
  'guaranteed',
  'save',
  'discount',
  'hurry',
];

// Advanced keyword filtering function
const filterKeywords = (text) => {
  let filteredText = text;

  // Filter out unwanted keywords
  unwantedKeywords.forEach((keyword) => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi'); // Case-insensitive word boundary match
    filteredText = filteredText.replace(regex, '');
  });

  // Remove any remaining special characters
  filteredText = filteredText.replace(/[^a-zA-Z0-9\s]/g, '');

  // Remove extra spaces and trim the text
  filteredText = filteredText.replace(/\s+/g, ' ').trim();

  return filteredText;
};

// Enhanced AI refinement function
const refineWithAI = async (text, tone) => {
  // Simulating AI processing delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Adjust the text based on the selected tone
  let refinedText = text;

  switch (tone) {
    case 'casual':
      refinedText = `${refinedText} 😊 Ready to take the next step?`;
      break;
    case 'formal':
      refinedText = `${refinedText}. Please do not hesitate to contact us for further information.`;
      break;
    case 'persuasive':
      refinedText = `${refinedText}. Act now and experience the difference!`;
      break;
    case 'exciting':
      refinedText = `${refinedText} 🚀 Get excited and join us today!`;
      break;
    case 'trustworthy':
      refinedText = `${refinedText}. Trust in us, and let's grow together.`;
      break;
    default:
      // Neutral or any other tone
      break;
  }

  return refinedText;
};

// Export the utility functions
export { filterKeywords, refineWithAI };
