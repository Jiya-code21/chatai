import React from 'react'
import axios from "axios"
import {useState} from "react"
import './App.css'
const App = () => {

    const [question,setQuestion]=useState("")

    const [answer,setAnswer]=useState("")

async function generateAnswer(){
    setAnswer("Loading...")
        const response=await axios({
           url: import.meta.env.VITE_GEMINI_API_URL,
            method:"post",
            data:{
    "contents": [
      {
        "parts": [
          {
            "text": question
          }
        ]
      }
    ]
  }
        })

        setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text'])
    }
  return (
    <div>
      <h1>CHAT AI</h1>
      <textarea className="input" value={question} onChange={(e) => setQuestion(e.target.value)} cols="30" rows="10"></textarea>

      <button className="button" onClick={generateAnswer}>Generate answer</button>

      <pre className="answer">{answer}</pre>
    </div>
  )
}

export default App
