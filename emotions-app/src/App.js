import './main.css'
import React, { useEffect, useState } from 'react'

import { data } from './data'

import WelcomeSection from './components/WelcomeSection'
import EnjoymentSection from './components/EnjoymentSection'
import SadnessSection from './components/SadnessSection'
import FearSection from './components/FearSection'

// READ HERE FUTURE ME: I'M NOT 100% SURE WHERE THE ISSUE IS 
// 1. NOTHING'S RENDERING WHEN ASKED
// 2. THE OTHER ARRAY ISN'T UPDATING PROPERLY

function App() {
  const[demoToggle, setDemoToggle] = useState(false)

  useEffect(() => {
    console.log("----------------------------")
  }, [])


  return (
    <>
      <main>
        <WelcomeSection demoToggle={demoToggle} />
        <SadnessSection id={"Sadness"} demoToggle={demoToggle} changeState={setDemoToggle}/>
        <FearSection id={"Fear"} demoToggle={demoToggle} changeState={setDemoToggle}/>
        <EnjoymentSection id={"Enjoyment"} demoToggle={demoToggle} changeState={setDemoToggle}/>
      </main>
    </>
  );
}

export default App;
