import React from 'react'
import { data } from '../data'
import DemoBtn from './DemoBtn'

export default function EnjoymentSection ({ demoToggle, changeState }) {

  let enjoymentObj = data.find((obj) => {
    if(obj.title === "Enjoyment") {
      return obj.emotionProps
    }
  })
  console.log(enjoymentObj)

    return (
      <>
        <section 
          className={"p-relative"}
          id={enjoymentObj.title}
        >
          <h1 
            className={"allFontsProps emotionTitle"}
            style={{fontFamily: demoToggle ? enjoymentObj.emotionProps.realFontFamily : 'Roboto Condensed'}}
          >
            {enjoymentObj.title}
          </h1>
          <p
            style={{
              width: "30em",
              position: "absolute",
              top: "8em"}}>
            {enjoymentObj.emotionProps.text_description}
          </p>
          <DemoBtn
           toggleValue={demoToggle}
           setToggleValue={changeState}
           style={{
            position: "absolute",
            right: "0",
            bottom: "5em"}}
           />
        </section>
      </>
    )
  }