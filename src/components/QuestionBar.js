import React, { useState } from "react";
export default function QuestionBar() {
  const defaultQuestions = [
    {
      id: 0,
      question: "How are you feeling?",
      answer1: "Good",
      answer2: "Bad",
    },
    {
      id: 1,
      question: "What is your favorite color?",
      answer1: "Red",
      answer2: "Blue",
    },
    {
      id: 3,
      question: "What did you do today?",
      answer1: "Nothing",
      answer2: "Everything",
    },
  ];
  // let questionId = 0;
  let totalQuestions = defaultQuestions.length;
  const [questions] = useState(defaultQuestions);
  const [questionId, setQuestionId] = useState(0);
  const changeQuestion = () => {
    console.log(questionId);
    let id = questionId + 1;
    id = id % totalQuestions;
    setQuestionId(id);
  }

  return (
    <div className="question-row">
      <div className="logo-container">
        <img src="qyunmark.png" alt="logo" />
      </div>
      <div className="question-bar">
        {questions[questionId].question}
        <div className="answers" onClick={changeQuestion}>
          <div className="answer-one">{questions[questionId].answer1}</div>
          <div className="answer-two">{questions[questionId].answer2}</div>
        </div>
      </div>
      <div className="logo-container"></div>
    </div>
  );
}
