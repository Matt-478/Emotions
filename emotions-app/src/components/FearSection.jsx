import React from 'react'
import { data } from '../data'

export default function FearSection() {

  let fearObj = data.find((obj) => {
    if(obj.title === "Fear") {
      return obj.emotionProps
    }
  })
  console.log(fearObj)

  return (
    <>
      <section 
        className={"p-relative"}
        id={fearObj.title}
        >
          <h1 
          className={"allFontsProps emotionTitle"}
          // style={{fontFamily: demoToggle ? fearObj.emotionProps.realFontFamily : 'Roboto Condensed'}}
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
        {/* <DemoBtn
         toggleValue={this.props.demoToggle}
         setToggleValue={this.props.changeState}
         style={{
          position: "absolute",
          right: "0",
          bottom: "5em"}}
         /> */}
      </section>
    </>
  )
}
