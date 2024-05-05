const {
  openAI
 } = require("../config/gpt.js");

const {
  _getUserFinancialData,
  _getUserPersonalData,
} = require("../models/hackmodels.js");

const getAmount = (req, res) => {
  const { id } = req.params;
  _getUserFinancialData(id)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.status(404).json({ msg: "something went wrong" });
      console.log(e);
    });
};

async function getUserPersonalData(id) {
  try {
    return _getUserPersonalData(id);
  } catch (error) {
    console.error("Error retrieving user personal data:", error);
    throw error;
  }
}

async function getUserFinancialData(id) {
  try {
    return _getUserFinancialData(id);
  } catch (error) {
    console.error("Error retrieving user financial data:", error);
    throw error;
  }
}

const getAdvice = async (req, res) => {

  const { id } = req.params;

  const user = await getUserPersonalData(id);
  const money = await getUserFinancialData(id);

  let userSituation = `
      User Financial Situation:
      - Monthly Income: ${user[0].monthly_income}
      - Size of the household: ${user[0].number_of_people}
      - Country of residence: ${user[0].country}
    `;

  money.forEach((v) => {
    userSituation += `\n -${v.name}:${v.totalamount}`;
  });

  const prompt = `
      You are a financial advisor. You will be given some information about the user's monthly expenditure and their income, as well as some personal details. Please give them some advice as to how they can improve their financial situation, specifically which categories would require more attention. Pay attention to the country of residence and assume figures are given in the local currency. Limit your response to 100 words.
      ${userSituation}`;

  console.log(openAI);

  const completion = await openAI.chat.completions.create({
    messages: [{ role: "system", content: prompt }],
    model: "gpt-4-turbo-2024-04-09",
  });
  const htmlContent = completion.choices[0].message.content;

  res.json(htmlContent);
};

module.exports = {
  getAmount,
  getUserPersonalData,
  getUserFinancialData,
  getAdvice
};
