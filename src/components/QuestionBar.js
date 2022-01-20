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
      id: 2,
      question: "Do you speak English?",
      answer1: "Yes",
      answer2: "No",
    },
    {
      id: 3,
      question: "Are you an?",
      answer1: "Indian",
      answer2: "NRI",
    },
    {
      id: 4,
      question: "What is your gender",
      answer1: "Male",
      answer2: "Female",
    },
  ];
  let totalQuestions = defaultQuestions.length;
  const [questions] = useState(defaultQuestions);
  const [questionId, setQuestionId] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [answeredList, setAnsweredList] = useState([]);
  const changeQuestion = (ans) => {
    var answers = {
      questions: questions[questionId].question,
      answers:
        ans == 1
          ? questions[questionId].answer1
          : questions[questionId].answer2,
    };
    setAnsweredList([...answeredList, answers]);
    let id = questionId + 1;
    if (id == totalQuestions) {
      setCompleted(true);
    }
    setQuestionId(id);
  };
  return (
    <div>
      {/* <video id="video" controls autoplay="1">
        <source src="gearup.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="d-flex justify-content-center">
        <div>
          {!completed ? (
            <div>
              <div className="logo-container">
                <img type="button" src="qyunmark.png" alt="logo" />
              </div>
              <div className="question-bar">
                <span className="questionfield">
                  {questions[questionId].question}
                </span>
                <div className="d-flex justify-content-end">
                  <div className="answer-one" type="button" onClick={() => changeQuestion(1)}>
                    {questions[questionId].answer1}
                  </div>
                  <div className="answer-two" type="button" onClick={() => changeQuestion(2)}>
                    {questions[questionId].answer2}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="d-flex">
               <div className="logo-container" style={{marginLeft: '-5%'}}>
                    <img type="button" src="qyunmark.png" alt="logo" />
                </div>
                <div className="result-card">
                  {answeredList.map((answer, idx) => {
                    return <div>
                      <div className="py-2"><span className="pr-3">{answer.questions}</span><span>{answer.answers}</span></div>
                    </div>
                  })}
                </div>
            </div>
          )}
          <div className="qyun-answers">
            <a href="">Download badge</a>•
            <a href="">Download iconset</a>•
            <a href="">Download template</a>
          </div>
        </div>
      </div>
    </div>
  );
}
