import express from 'express';
import triviaQuestions from "./data.js"
const router = express.Router();

let counter = 0;
let index = 0;
const size = triviaQuestions.length;
let len = size -1;

router.get('/quiz', (req, res) => {
  if (index >= size) {
      return res.sendStatus(404);
  }
  const quiz = triviaQuestions[index].question;
  res.status(200).json(quiz);
});

router.post('/quiz', (req, res) => {
  let answer = req.body.answer;
  if (answer === triviaQuestions[index].answer){
      counter ++;
  }
    
  index++;

  if (index === -1) {
    return res.status(404).json({ msg: "Error" });
  }
  else if (index >= size) {
    return res.status(200).json({msg: "No more questions available"});
  }
  const quiz = triviaQuestions[index].question;
  res.status(200).json({ msg: "Answer submitted successfully",quiz });

});

router.get('/quiz/score', (req, res) => {
  if(counter === size){
    res.status(200).json({ msg: `Brilliant!!!, Your score is ${counter}`});
  }
  else if(counter < size){
    res.status(200).json({ msg:`Your score is ${counter}`});
  }
});


export default router;