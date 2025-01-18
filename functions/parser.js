const { declarations } = require('../functions/declaration');
const { model } = require('../utils/gemini');

const parseFunctionCall = async (userInput) => {
  const prompt = `
        You are a data analysis assistant that help query a student database.
        Given the following user query: "${userInput}"

        You have access to these functions:
        ${JSON.stringify(declarations, null, 2)}

        Return a JSON object with:
        1. functionName: The name of the function to call
        2. parameters: The parameters to pass to the function
        3. explanation: Why you chose this function and parameters

        Make sure the parameters match the function's schema exactly.

        Important: Do not include any formatting like \`\`\`json or \`\`\` in your response. Return plain JSON only.
    `;

  const result = await model.generateContent(prompt);
  const response = result.response.text();

  return JSON.parse(response);
};

module.exports = { parseFunctionCall };
