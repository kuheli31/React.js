import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObject = {
    name: "Kuheli",
    age: 25,
    hobbies: ["reading", "coding", "traveling"],
    image: "https://opengraph.githubassets.com/34b9cae1f669853fb4b445cfa7de6163caf50bfa3be92fde8e8c923767bf7680/kuheli31/html-details"
  }

  let myArray = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className="bg-pink-600 text-black p-10 rounded-full">Tailwind Test</h1>
      <Card name="Koyel" image="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1HgsAI.img?w=550&h=309&m=6"/>
      <Card name="Durjoy" image="https://www.bing.com/th?id=OADD2.7834089552474_1QDJ9D53LDMLE1V73J&pid=21.2&c=17&roil=0&roit=0&roir=1&roib=1&w=300&h=157&dynsize=1&qlt=90&dpr=2.00"/>
    </>
  )
}

export default App
