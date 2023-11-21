import { useState,useEffect } from 'react'
import Quiz from './assets/Quiz';
import Page from './assets/Page';

import './App.css'

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizParams, setQuizParams] = useState({
    category: '',
    difficulty: '',
    numQuestions: 10,
  });

  const handleStartQuiz = (category, difficulty, numQuestions) => {
    setQuizParams({
      category,
      difficulty,
      numQuestions: parseInt(numQuestions, 10),
    });
    setQuizStarted(true);
  };

  return (
    <div className="box">
      {quizStarted ? (
        <Quiz {...quizParams} />
      ) : (
        <Page onStartQuiz={handleStartQuiz} />
      )}
    </div>
  );
}

export default App
