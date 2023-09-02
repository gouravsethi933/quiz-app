import { createContext, useContext, useState,useEffect } from "react";

const QuizContext = createContext();

// eslint-disable-next-line react/prop-types
export function QuizProvider({ children }) {
  
  const [userScore, setUserScore] = useState(0);
  const [quizData, setQuizData] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const fetchData = async () => {
    await fetch('https://opentdb.com/api.php?amount=15')
      .then(response => response.json())
      .then(data => setQuizData(data.results))
      .catch(error => console.error(error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <QuizContext.Provider value={{  userScore, setUserScore,quizData,userAnswers, setUserAnswers }}>
      {children}
    </QuizContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useQuizContext() {
  return useContext(QuizContext);
}