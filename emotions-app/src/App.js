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
    console.log("----------------------------")
    // createEmotionIds()
    triggerSoloState(data, createEmotionIds)
  }, [])

  // returns section id's
  function createEmotionIds () {
    // Access the elements
    // loop through all the children of "main"
    // return new variables, each with their according id value

    let mainNode = document.getElementsByTagName("main")
    if(mainNode.length) {
      let arrayOfChildNodes = mainNode[0].childNodes
      let arrayofChildElements = Array.from(arrayOfChildNodes)
      
      // pushing into new array only the ID's
      let possibleValues = []
      arrayofChildElements.forEach((item) => {
        possibleValues.push(item.id)
      })
      // console.log("emotion section variable array " , possibleValues)

      return possibleValues
    } else {
      return "ERROR"
    }
    
    // console.log("emotion section variable array " , possibleValues)
    // get the values out of the array - maybe NOT (?)

    // return possibleValues
  }


  let emotionIDs = createEmotionIds()
  console.log("ID's from createEmotionIDs function: ", emotionIDs)


  function triggerSoloState (data) {
    // returns titles from data
    let titles = []
    data.forEach((item) => {
      titles.push(item.title)
    })
    console.log("titles from triggerSoloState function: ", titles)

    // console.log("emotion ID's from the other function", ids)

    // if(emotionIDs === titles) {
    //   return true 
    // } else {
    //   return false
    // }
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
