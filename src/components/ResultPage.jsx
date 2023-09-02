import { useQuizContext } from "../context/QuizContext"
import "../App.css"




function ResultPage() {
  const {userScore,quizData,userAnswers} = useQuizContext();
 
  
 
  return (
    <div className="result"style={{textAlign:"center",backgroundColor:"whitesmoke",padding:"1rem"}}>
      
      <h1>Result </h1>
      <h3>Your Score is {userScore} out of 15</h3>
      <div className="box" style={{display:"flex",gap:"2rem",justifyContent:"center",flexWrap:"wrap",marginTop:"4rem",marginBottom:"2rem"}}>
      {
        quizData.map((data,index)=>{
          return(
            <div className="det"key={index} style={{backgroundColor:userAnswers[index] === data.correct_answer?"lightgreen":"#FF0000",width:"60%",padding:"1rem",borderRadius:"2rem"}}>
              
              <h3 > {data.question}</h3>
              <strong>Your Answer : {userAnswers[index]}</strong>
              <br/>
              <strong
              >Correct Answer : {data.correct_answer}</strong>
            </div>
          )
        })
        
      }
      </div>
    </div>
  )
}

export default ResultPage