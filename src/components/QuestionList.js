import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setQuestions, handleQuestionDelete, handleQuestionUpdate}) {
  

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
  }, [])
  return (
    <section>
      <h1>Quiz Questions</h1>
    <ul>{questions.map((question) => <QuestionItem handleQuestionUpdate={handleQuestionUpdate} question={question} handleQuestionDelete={handleQuestionDelete} />)}</ul>
    </section>
  );
}

export default QuestionList;
