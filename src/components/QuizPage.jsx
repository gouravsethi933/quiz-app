import {  useState,useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../context/QuizContext";

function QuizPage() {
  const {quizData} = useQuizContext();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [visitedQuestions, setVisitedQuestions] = useState([]);
  const [attemptedQuestions, setAttemptedQuestions] = useState([]);
    const{userScore,setUserScore} = useQuizContext();
    const{userAnswers, setUserAnswers} = useQuizContext();
    const [remainingTime, setRemainingTime] = useState(30 * 60);
    const navigate = useNavigate();
  
    useEffect(() => {
        
        const timerInterval = setInterval(() => {
          setRemainingTime(prevTime => prevTime - 1);
        }, 1000);
    
        
        return () => clearInterval(timerInterval);
      }, []);
    
      useEffect(() => {
        
        if (remainingTime === 0) {
          navigate("/result")
        }
      }, [remainingTime,navigate]);
  const handleQuestionClick = (index) => {
    if (!visitedQuestions.includes(index)) {
      setVisitedQuestions([...visitedQuestions, index]);
    }
    setCurrentQuestionIndex(index);
  };

  const handleOptionClick = (optionIndex) => {
    if (!attemptedQuestions.includes(currentQuestionIndex)) {
      setAttemptedQuestions([...attemptedQuestions, currentQuestionIndex]);
      
      
    }
    if(!visitedQuestions.includes(currentQuestionIndex) || !attemptedQuestions.includes(currentQuestionIndex) ){
        setVisitedQuestions([...visitedQuestions, currentQuestionIndex]);
    }
    
    const selectedOption = optionIndex === quizData[currentQuestionIndex].incorrect_answers.length
    ? quizData[currentQuestionIndex].correct_answer
    : quizData[currentQuestionIndex].incorrect_answers[optionIndex];
    setUserAnswers([...userAnswers.slice(0, currentQuestionIndex), selectedOption]);
    
  const isCorrect = selectedOption === quizData[currentQuestionIndex].correct_answer;
  if(currentQuestionIndex<14){
    setCurrentQuestionIndex(currentQuestionIndex+1);
    }
  
  if (isCorrect) {
    setUserScore(userScore+1);
    console.log(userScore)

    console.log("Correct answer!");
    
    
    
  } else {
    
    console.log("Incorrect answer.");
  }
  
if(currentQuestionIndex===quizData.length-1){
    navigate('/result');
}
console.log(userAnswers);
  };

  return (
    <div className="quiz">
      <section style={{backgroundColor:"#4D5870"}}>
        <h1 style={{
           alignItems: "center",
           justifyContent: "center",
          display:"flex"}}>QUIZ APP</h1>
        <div className="btns" >
          {quizData.map((_, index) => (
            <button
              key={index}
              className={`questnNo ${visitedQuestions.includes(index) ? "visited" : ""}`}
              onClick={() => handleQuestionClick(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="infoCont"style={{display:"flex",justifyContent:"space-between",padding:"1rem"}}>
        <strong>Attempted: {attemptedQuestions.length}</strong>
        <strong>Visited : {visitedQuestions.length}</strong>
        
        <strong className="timer">
            Time Remaining :  {Math.floor(remainingTime / 60)}:{remainingTime % 60} 
        </strong>
        </div>
        
        
      </section>
      <section>
        <div className="data">
          {currentQuestionIndex < quizData.length && (
            <div>
              <h1>{currentQuestionIndex+1}.  {quizData[currentQuestionIndex].question}</h1>
              <div className="optns">
                {quizData[currentQuestionIndex].incorrect_answers.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    onClick={() => handleOptionClick(optionIndex)}
                    className="btn-opt"
                  >
                    {option}
                  </button>
                ))}
                <button
                className="btn-opt"
                  onClick={() => handleOptionClick(quizData[currentQuestionIndex].incorrect_answers.length)}
                >
                  {quizData[currentQuestionIndex].correct_answer}
                </button>
              </div>
              
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default QuizPage;