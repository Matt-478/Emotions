import React from 'react'
import { data } from '../data'
import DemoBtn from './DemoBtn'

export default function SadnessSection({ demoToggle, changeState }) {

  let sadObj = data.find((obj) => {
    if(obj.title === "Sadness") {
      return obj.emotionProps
    }
  })
  // console.log(sadObj)

  return (
    <>
      <section 
        className={"p-relative"}
        id={sadObj.title}
        >
          <h1 
          className={"allFontsProps emotionTitle"}
          style={{fontFamily: demoToggle ? sadObj.emotionProps.realFontFamily : 'Roboto Condensed'}}
          >
            {sadObj.title}
          </h1>
        <p
          style={{
            width: "30em",
            position: "absolute",
            top: "8em"}}>
          {sadObj.emotionProps.text_description}
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
