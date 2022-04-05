import React, {useState} from 'react'
import { data } from '../data'
import DemoBtn from './DemoBtn'
import { GiTornado } from 'react-icons/gi';

export default function SadnessSection({ fromIfStatement }) {

  let sadObj = data.find((obj) => {
    if(obj.title === "Sadness") {
      return obj
    }
  })
  console.log(sadObj)

  const[sadness, setSadness] = useState(false)

  return (
    <>
      <section 
        className={"p-relative"}
        id={sadObj.title}
        >
          <h1 
          className={"allFontsProps emotionTitle"}
          style={{fontFamily: sadness ? sadObj.emotionProps.realFontFamily : 'Roboto Condensed'}}
          >
            {sadObj.title}
          </h1>
          <GiTornado size="5em"/>
        <p
          style={{
            width: "30em",
            position: "absolute",
            top: "8em"}}>
          {sadObj.emotionProps.text_description}
        </p>
        <DemoBtn
         toggleValue={sadness}
         setToggleValue={setSadness}
         style={{
          position: "absolute",
          right: "0",
          bottom: "5em"}}
         />
      </section>
    </>
  )
}
