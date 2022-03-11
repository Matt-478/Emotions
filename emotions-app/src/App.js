import './main.css'
import React, { useEffect, useState } from 'react'

import { data } from './data'

import WelcomeSection from './components/WelcomeSection'
import EnjoymentSection from './components/EnjoymentSection'
import SadnessSection from './components/SadnessSection'
import FearSection from './components/FearSection'


function App() {
  const[demoToggle, setDemoToggle] = useState(false)

  return (
    <>
      <main>
        <WelcomeSection demoToggle={demoToggle}/>
        <SadnessSection demoToggle={demoToggle} changeState={setDemoToggle}/>
        <FearSection demoToggle={demoToggle} changeState={setDemoToggle}/>
        <EnjoymentSection demoToggle={demoToggle} changeState={setDemoToggle}/>
      </main>
    </>
  );
}

export default App;
