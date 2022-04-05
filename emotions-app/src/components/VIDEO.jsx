import React from 'react'
import '../styling/welcomeStyle.css'

export default function VIDEO () {
    return (
      <>
        <section 
          className=".video-box">
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