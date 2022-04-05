import React from 'react'
import { data } from '../data'
import '../styling/welcomeStyle.css'

export default function EnjoymentSection ({ demoToggle }) {

  let welcomeObj = data.find((obj) => {
    if(obj.title === "Welcome") {
      return obj
    }
  })
  // console.log(welcomeObj)

    return (
      <>
        <section 
          className={"p-relative video-box"}
          id={welcomeObj.title}
        >
          <h1 
            className={"allFontsProps emotionTitle"}
            style={{fontFamily: 'Roboto Condensed'}}
          >
            {welcomeObj.text_description}
          </h1>
          <video loop autoPlay>
              <source
                src="../styling/pexels-oleg-lehnitsky-7898649.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
        </section>
      </>
    )
  }