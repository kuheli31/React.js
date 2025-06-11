import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const ReactElement = {
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target : 'blank'
//     },
//     children : 'Click me to visit Google!'
// }

const AnotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const ReactElement = React.createElement(
  'a' , {href : 'https://google.com' , target : 'blank'} , 'I want to visit Google.Click Me!'
)

createRoot(document.getElementById('root')).render(
    <App/>
)
