const { OpenAI } = require('openai');

// Initialize OpenAI with your API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure the API key is stored in an environment variable
});

/**
 * Generates ad text using GPT-3 based on the provided prompt.
 * @param {string} prompt - The prompt to send to GPT-3.
 * @param {object} options - Optional settings to customize the GPT-3 request.
 * @param {string} [options.model='gpt-3.5-turbo'] - The model to use (e.g., 'text-davinci-003', 'gpt-3.5-turbo').
 * @param {number} [options.maxTokens=100] - The maximum number of tokens to generate.
 * @param {number} [options.temperature=0.7] - The creativity level of the generated text.
 * @returns {Promise<{ adText: string, tokensUsed: number }>} - The generated ad text and token usage.
 */
const generateAdWithGPT3 = async (prompt, options = {}) => {
  const {
    model = 'gpt-3.5-turbo',
    maxTokens = 100,
    temperature = 0.7,
  } = options;

  try {
    // Log the prompt and options for debugging purposes
    console.log(
      `Generating ad with model: ${model}, maxTokens: ${maxTokens}, temperature: ${temperature}`
    );
    console.log(`Prompt: ${prompt}`);

    // Send the prompt to GPT-3 and receive the response
    const response = await openai.chat.completions.create({
      model,
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: maxTokens,
      temperature,
    });

    // Log the response for debugging purposes
    console.log('GPT-3 Response:', response.data);

    // Check if response contains the expected data
    if (
      response.choices &&
      response.choices[0] &&
      response.choices[0].message
    ) {
      const adText = response.choices[0].message.content.trim();
      const tokensUsed = response.usage?.total_tokens || 0;
      return { adText, tokensUsed };
    } else {
      throw new Error('Unexpected response format from GPT-3.');
    }
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error generating ad with GPT-3:', error);

    // Return a generic error message to avoid exposing internal details
    return {
      adText:
        'An error occurred while generating the ad. Please try again later.',
      tokensUsed: 0,
    };
  }
};

module.exports = {
  generateAdWithGPT3,
};
