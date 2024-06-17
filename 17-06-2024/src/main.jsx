import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Card from './components/card.jsx'
// import CreateTodo from './components/CreateTodo.jsx'
import JavascriptExpression from './components/JavascriptExpression.jsx'
import './index.css'
import Eventmanipulation from './components/eventsManipulation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Eventmanipulation />
  </React.StrictMode>,
)
