const OpenAI = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const apiKey = process.env.api_key;

const openAI = new OpenAI({apiKey});

module.exports = {
    openAI
}

