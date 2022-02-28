import './main.css'
import React, { useEffect, useState } from 'react'

import { data } from './data'

import WelcomeSection from './components/WelcomeSection'
import EnjoymentSection from './components/EnjoymentSection'
import SadnessSection from './components/SadnessSection'
import FearSection from './components/FearSection'


function App() {
  const[demoToggle, setDemoToggle] = useState(false)

    // let sadObj = data.find((obj) => {
    //   if(obj.title === "Sadness") {
    //     return obj.emotionProps
    //   }
    // })

  // 1. List of all id's
  // let sectionElements = document.getElementsByTagName("section")
  // let sectionElementsArray = Array.from(sectionElements); //convert to array
  // console.log(sectionElementsArray)
  // let newArray = sectionElementsArray.map((item) => {
  //   console.log(item.id)
  // })

  // 2. Make sure when we scroll we know which one we're viewing
  // window.addEventListener("scroll", (element) => {
  //   console.log(element.currentTarget)
  // })

    // let welcomeObj = data.find((obj) => (
    //   if(obj.title === "Welcome to Emotions") {
    //     return obj.emotionProps
    //   }
    // ))
    // console.log(welcomeObj)
  

  return (
    <>
      <main>
      <WelcomeSection demoToggle={demoToggle}/>
      <SadnessSection demoToggle={demoToggle} changeState={setDemoToggle}/>
      <FearSection demoToggle={demoToggle} changeState={setDemoToggle}/>
      <EnjoymentSection demoToggle={demoToggle} changeState={setDemoToggle}/>
        {/* {data.map((group) => (
          <section 
            id={group.title}
            className={"p-relative"}
            style={{backgroundColor: group.style.backgroundColor}}
          >
            {/* {if(demoToggle && ) }  
              <h1 
              className={"allFontsProps emotionTitle"}
              style={{fontFamily: demoToggle ? group.realFontFamily : 'Roboto Condensed'}}
              //  style={{(group.realFontFamily === "Aarcover" ? style = fontVariantCaps = "all-small-caps" : }}
              >
                {group.title}
              </h1>
            <p
              style={{
                width: "30em",
                position: "absolute",
                top: "8em"}}>
              {group.text_description}
            </p>
            <DemoBtn
             toggleValue={demoToggle}
             setToggleValue={setDemoToggle}
             style={{
              position: "absolute",
              right: "0",
              bottom: "5em"}}
             />
          </section>
        ))} */}
      </main>
    </>
  );
}

export default App;
