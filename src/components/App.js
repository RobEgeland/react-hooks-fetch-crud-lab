import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [questions, setQuestions] = useState([])
  const [page, setPage] = useState("List");

  function handleQuestionDelete(id) {
    const filteredDelete = questions.filter((question) => question.id !== id)
    setQuestions(filteredDelete)
  }

  function handleAddQuestion(newQuestion) {
    const newArr = [...questions, newQuestion]
    setQuestions(newArr)
  }

  function handleQuestionUpdate(updatedAnswer) {
    const updatedQuestions = questions.map((question) => {
      if(question.id === updatedAnswer.id) {
        return updatedAnswer
      }else {
        return question
      }
    })
    setQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
    {page === "Form" ? <QuestionForm handleAddQuestion={handleAddQuestion} setQuestions={setQuestions} questions={questions} /> : <QuestionList handleQuestionUpdate={handleQuestionUpdate} questions={questions} setQuestions={setQuestions} handleQuestionDelete={handleQuestionDelete} />}
    </main>
  );
}

export default App;
