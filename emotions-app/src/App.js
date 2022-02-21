import './main.css'
import React, { useRef, useEffect, useState } from 'react'

import { data } from './data'
import DemoBtn from './components/DemoBtn'
import AngerSection from './components/AngerSection'

function App() {
  const GroupRef = useRef([])
  const[demoToggle, setDemoToggle] = useState(false)

  const bgChange = (el) => {
    const styles = GroupRef.current.map((group, i) => {
    const rect = group.getBoundingClientRect()

    return { group, rect }
    }).find((group) => group.rect.bottom >= window.innerHeight * 0.5)

    document.body.style.backgroundColor = `${styles.group.dataset.bgcolor}`
  }

  useEffect(() => {
    window.addEventListener('scroll', bgChange)
  }, [])

  let sectionElements = document.getElementsByTagName("section")
  let sectionElementsArray = Array.from(sectionElements); //convert to array
  console.log(sectionElementsArray)
  // let newArray = sectionElementsArray.map((item) => {
  //   console.log(item.id)
  // })

  return (
    <>
      <main>
        {data.map((group, i) => (
          <section 
            ref={(el) => (GroupRef.current[i] = el)}
            data-bgcolor={group.background}
            id={group.title}
          >
            {/* {if(demoToggle && ) } */}
              <h1 
              className={"allFontsProps"}
              style={{fontFamily: demoToggle ? group.realFontFamily : 'Roboto Condensed',
               }}
              //  style={{(group.realFontFamily === "Aarcover" ? style = fontVariantCaps = "all-small-caps" : }}
              >
                {group.title}
              </h1>
            <p>
              {group.text_description}
            </p>
            <DemoBtn toggleValue={demoToggle} setToggleValue={setDemoToggle}/>
          </section>
        ))}
      </main>
    </>
  );
}

export default App;
