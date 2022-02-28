import React from 'react'
import { data } from '../data'

export default function EnjoymentSection ({ demoToggle }) {

  let welcomeObj = data.find((obj) => {
    if(obj.title === "Welcome") {
      return obj
    }
  })
  console.log(welcomeObj)

    return (
      <>
        <section 
          className={"p-relative"}
          id={welcomeObj.title}
        >
          <h1 
            className={"allFontsProps emotionTitle"}
            style={{fontFamily: demoToggle ? welcomeObj.emotionProps.realFontFamily : 'Roboto Condensed'}}
          >
            {welcomeObj.text_description}
          </h1>
        </section>
      </>
    )
  }