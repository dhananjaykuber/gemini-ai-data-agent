const { model } = require('./gemini');

const generateResponse = async (data, originalQuery) => {
  const prompt = `
        Given this data: ${JSON.stringify(data)}    
        and the original question "${originalQuery}"

        Generate the natural language response that:
        1. Directly answers the question
        2. Provides relevant insights from the data
        3. Uses specific numbers and facts from the data
        Keep it concise but informative.
    `;

  const result = await model.generateContent(prompt);

  return result.response.text();
};

module.exports = { generateResponse };
