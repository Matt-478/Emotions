import './main.css'
import React, { useEffect, useState } from 'react'

import { data } from './data'

import WelcomeSection from './components/WelcomeSection'
import EnjoymentSection from './components/EnjoymentSection'
import SadnessSection from './components/SadnessSection'
import FearSection from './components/FearSection'


function App() {
  const[demoToggle, setDemoToggle] = useState(false)
  useEffect(() => {
    createEmotionIds()
  }, [])

  function createEmotionIds () {
    // Access the elements
    // loop through all the children of "main"
    // return new variables, each with their according id value
    let mainNode = document.getElementsByTagName("main")
    let arrayOfChildNodes = mainNode[0].childNodes
    let arrayofChildElements = Array.from(arrayOfChildNodes)
    console.log(arrayofChildElements)

    arrayofChildElements.forEach((item) => {
      console.log("id values " , item.id)
    })
  }

  return (
    <>
      <main>
        <WelcomeSection demoToggle={demoToggle}/>
        <SadnessSection id={"Sadness"} demoToggle={demoToggle} changeState={setDemoToggle}/>
        <FearSection id={"Fear"} demoToggle={demoToggle} changeState={setDemoToggle}/>
        <EnjoymentSection id={"Enjoyment"} demoToggle={demoToggle} changeState={setDemoToggle}/>
      </main>
    </>
  );
}

export default App;
