import './main.css'
import './styling/mediaQueries'
import React, { useEffect, useState } from 'react'

import { data } from './data'

import WelcomeSection from './components/WelcomeSection'
import EnjoymentSection from './components/EnjoymentSection'
import SadnessSection from './components/SadnessSection'
import FearSection from './components/FearSection'
import VIDEO from './components/VIDEO'

function App() {
  const[demoToggle, setDemoToggle] = useState(false)

  // states for each emotion
  const[welcome, setWelcome] = useState(false)
  const[enjoyment, setEnjoyment] = useState(false)
  const[sadness, setSadness] = useState(false)
  const[fear, setFear] = useState(false)

  useEffect(() => {
    console.log("----------------------------")
  }, [])


  return (
    <>
      <main>
        <WelcomeSection demoToggle={demoToggle} />
        <SadnessSection id={"Sadness"}
          // sadness={sadness}
          // changeSadness={setSadness}
          />
        <FearSection id={"Fear"} fear={fear} changeFear={setFear}/>
        <EnjoymentSection id={"Enjoyment"} demoToggle={demoToggle} changeState={setDemoToggle}/>
      </main>
    </>
  );
}

export default App;
