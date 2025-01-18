require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectToDatabase = require('./config/database');
const { implementations } = require('./functions/implementations');
const { parseFunctionCall } = require('./functions/parser');
const { generateResponse } = require('./utils/responseGenerator');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connectToDatabase();

app.post('/api/query', async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ message: 'Query is required' });
    }

    // Parse the user query to extract the function name and parameters
    const functionCall = await parseFunctionCall(query);

    // Get the implementation of the function
    const tools = implementations[functionCall.functionName];

    if (!tools) {
      return res
        .status(400)
        .json({ message: `Function not found: ${functionCall.functionName}` });
    }

    // Call the function with the provided parameters
    const result = await tools(functionCall.parameters);

    // Generate a natural language response based on the result
    const naturalLanguageResponse = await generateResponse(result, query);

    return res.status(200).json({
      result,
      naturalLanguageResponse,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} 🚀`);
});
