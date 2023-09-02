
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import QuizPage from './components/QuizPage'
import ResultPage from './components/ResultPage'
 import 'bootstrap/dist/css/bootstrap.min.css';
import { QuizProvider } from './context/QuizContext'



function App() {
   return (
    <>
      
        <QuizProvider>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/quiz' element={<QuizPage />}/>
        <Route path='/result' element={<ResultPage/>}/>
        </Routes>
        </QuizProvider>
        
        
        
      
    </>
  )
}

export default App