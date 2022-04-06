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
          <h1 
          className={"allFontsProps emotionTitle"}
          style={{fontFamily: sadness ? sadObj.emotionProps.realFontFamily : 'Roboto Condensed'}}
          >
            {sadObj.title}
          </h1>
          {/* <GiTornado size="5em"/> */}
        <p
          style={{
            width: "30em",
            position: "absolute",
            top: "8em"}}>
          {sadObj.emotionProps.text_description}
        </p>

        {sadness ? (
          <>
            {/* <GiTornado size="5em" style={{position: "absolute", top: "300px"}}/> */}
            <svg width="595" height="842" viewBox="0 0 595 842" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="A4 - 1">
              <g id="flame">
                <path id="Vector 2" d="M72.5 82C71.8618 82.0851 71.178 82.1514 70.464 82.1925M70.464 82.1925C62.7862 82.635 53.5676 79.7704 56 67C58 56.5 67.0001 55.6326 71.5001 51.5C76.9445 46.5 80.5 47 80.5 31C90.5001 43 85.5001 51.8982 85.5001 63C85.5001 76 80.5 81 70.464 82.1925Z" stroke="#C4C4C4" stroke-width="2"/>
              </g>
              <g id="Candle body">
                <path id="Vector 1" d="M71 101V68" stroke="black" strokeWidth="5"/>
                <rect id="Rectangle 1" x="34" y="93" width="75" height="195" fill="#C4C4C4"/>
              </g>
            </g>
          </svg>
        </>
        ) : null}

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
