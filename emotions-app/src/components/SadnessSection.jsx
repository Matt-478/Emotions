import React, {useState} from 'react'
import { data } from '../data'
import DemoBtn from './DemoBtn'

import '../styling/sadnessStyle.css'

export default function SadnessSection({ fromIfStatement }) {

  let sadObj = data.find((obj) => {
    if(obj.title === "Sadness") {
      return obj
    }
  })
  console.log(sadObj)

  const[sadness, setSadness] = useState(false)

  // if(sadness) {
  //   return (
  //     <GiTornado size="5em" style={{position: "absolute", top: "300px"}}/>
  //   )
  // }

  return (
    <>
      <section 
        className={"p-relative"}
        id={sadObj.title}
        >

        { /* conditional render */
        sadness ? (
        <>
        <section 
          className={"p-relative bg-sad"}
          id={sadObj.title}
          >
           <svg width="75" height="257" viewBox="0 0 75 257" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="candle-1">
              <path id="candle-1-flame" d="M37.5001 20.5C33.0001 24.6326 24 25.5 22 36C19.5676 48.7704 28.7862 51.635 36.464 51.1925C46.5 50 51.5001 45 51.5001 32C51.5001 20.8982 56.5001 12 46.5 0C46.5 16 42.9445 15.5 37.5001 20.5Z" fill="#DE3F3F"/>
              <path d="M37 70V37" stroke="black" stroke-width="5"/>
              <rect y="62" width="75" height="195" fill="#C4C4C4"/>
            </g>
           </svg>
          </section>
          </>
        ) : (
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
