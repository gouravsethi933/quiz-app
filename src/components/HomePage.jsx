import { useState } from "react";
import {  useNavigate } from "react-router-dom"


function HomePage() {
    const navigate = useNavigate();
    const[value,setvalue] = useState("")
    const handleSubmit=()=>{
        if(value.trim()===''){
           alert("Please Enter your Email!");
        }
        else{
            navigate("/Quiz");
        }
 }
  return (
    
    <div className="start" style={{textAlign:"center"}}>
        <h2 style={{fontSize:"5rem"}}>Welcome to the Quiz App</h2>
        <h1 style={{marginTop:"5rem"}}> To Start the Quiz Fill the details below</h1>
        <section style={{display:"flex",justifyContent:"center"}}>
            <div className="details"
             style={{padding:"1rem",
             display:"flex",
             justifyContent:"center",
             borderRadius: "2rem",
             gap:"2rem",
             backgroundColor:"#f8f8f8"}}>
                <input 
                 className="input-email"
                 type ="email"
                 placeholder="Please Enter your email" 
                 value={value}
                  onChange={(e)=>{setvalue(e.target.value)}}/>
                <button className="submit-btn" 
                onClick={handleSubmit}>Submit</button>
            </div>
        </section>
      
    </div>
   
  )
}

export default HomePage