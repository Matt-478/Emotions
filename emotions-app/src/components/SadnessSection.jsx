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
           <svg width="75" height="260" viewBox="0 0 75 260" fill="none"  xmlns="http://www.w3.org/2000/svg">
            <g id="candle-1">
              <path d="M38.5 54C37.8618 54.0851 37.178 54.1514 36.464 54.1925M36.464 54.1925C28.7862 54.635 19.5676 51.7704 22 39C24 28.5 33.0001 27.6326 37.5001 23.5C42.9445 18.5 46.5 19 46.5 3C56.5001 15 51.5001 23.8982 51.5001 35C51.5001 48 46.5 53 36.464 54.1925Z" stroke="#C4C4C4" stroke-width="2"/>
              <path d="M37 73V40" stroke="black" stroke-width="5"/>
              <rect id="candle-body" y="65" width="75" height="195" fill="#C4C4C4"/>
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
