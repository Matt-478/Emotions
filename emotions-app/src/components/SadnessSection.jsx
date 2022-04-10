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
            {/* first candle */}
           <svg width="75" height="257" viewBox="0 0 75 257" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="candle-1">
              <path id="candle-1-flame" d="M37.5001 20.5C33.0001 24.6326 24 25.5 22 36C19.5676 48.7704 28.7862 51.635 36.464 51.1925C46.5 50 51.5001 45 51.5001 32C51.5001 20.8982 56.5001 12 46.5 0C46.5 16 42.9445 15.5 37.5001 20.5Z" fill="#DE3F3F"/>
              <path d="M37 70V37" stroke="black" stroke-width="5"/>
              <rect y="62" width="75" height="195" fill="#C4C4C4"/>
            </g>
           </svg>

           {/* second candle */}
            <svg width="110" height="222" viewBox="0 0 110 222" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M44.3272 2.63307C52.8955 2.63307 55.1465 22.8964 45.7858 28.5876C36.4251 34.2788 30.7817 56.8493 45.7858 60.2055C60.7899 63.5618 65.4332 62.279 70.009 56.5068C74.5847 50.7346 67.375 38.9708 67.375 25.7218C67.375 16.4019 68.5591 15.4019 60.7899 5.83976C52.0035 -4.9742 34.4496 2.63306 44.3272 2.63307Z" fill="#DE9E3F"/>
              <path d="M55 77V50" stroke="black" stroke-width="5"/>
              <rect y="72" width="110" height="150" fill="#C4C4C4"/>
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
