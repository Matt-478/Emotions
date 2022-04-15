// import src from '*.avif'
import React, { useState } from 'react'
import { data } from '../data'
import DemoBtn from './DemoBtn'

export default function FearSection({ demoToggle }) {

  let fearObj = data.find((obj) => {
    if(obj.title === "Fear") {
      return obj.emotionProps
    }
  })
  // console.log(fearObj)

  const[fear, setFear] = useState(false)

  return (
    <>
      <section 
        className={"p-relative"}
        id={fearObj.title}
        >
          <h1 
          className={"allFontsProps emotionTitle"}
          style={{fontFamily: fearObj.emotionProps.realFontFamily}}
          style={{fontFamily: "Tupo Vyaz"}}
          >
            {fearObj.title}
          </h1>
        <p
          style={{
            width: "30em",
            position: "absolute",
            top: "8em"}}>
          {fearObj.emotionProps.text_description}
        </p>
        <DemoBtn
         toggleValue={fear}
         setToggleValue={setFear}
         style={{
          position: "absolute",
          right: "0",
          bottom: "5em"}}
         />
      </section>
    </>
  )
}
