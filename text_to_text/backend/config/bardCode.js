const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config()
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const run=async(prompt)=> {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const result= await model.generateContent(prompt)

    const response=  result.response
    const text = response.text()
    console.log(text)
    return text
    

}

module.exports = run;
