// // src/services/gpt3Service.js
// import { OpenAI } from 'openai';

// const openai = new OpenAI({
//   apiKey: process.env.REACT_APP_OPENAI_API_KEY, // Ensure the API key is stored in an environment variable
// });

// export const generateAdWithGPT3 = async (prompt) => {
//   try {
//     const response = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo', // You can use 'text-davinci-003' or other available models
//       messages: [
//         { role: 'system', content: 'You are a helpful assistant.' },
//         { role: 'user', content: prompt },
//       ],
//       max_tokens: 100, // Adjust the token count based on your needs
//       temperature: 0.7, // Adjust the creativity level
//     });

//     return response.choices[0].message.content.trim();
//   } catch (error) {
//     console.error('Error generating ad with GPT-3:', error);
//     return 'Error generating ad. Please try again later.';
//   }
// };
