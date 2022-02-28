import './main.css'
import React, { useRef, useEffect, useState } from 'react'

import { data } from './data'
import DemoBtn from './components/DemoBtn'
import AngerSection from './components/AngerSection'
import EnjoymentSection from './components/EnjoymentSection'

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
    // window.addEventListener('scroll', bgChange)
  }, [])

  // 1. List of all id's
  let sectionElements = document.getElementsByTagName("section")
  let sectionElementsArray = Array.from(sectionElements); //convert to array
  console.log(sectionElementsArray)
  let newArray = sectionElementsArray.map((item) => {
    console.log(item.id)
  })

  // 2. Make sure when we scroll we know which one we're viewing
  window.addEventListener("scroll", (element) => {
    console.log(element.currentTarget)
  })

  return (
    <>
      <main>
        {data.map((group, i) => (
          <section 
            ref={(el) => (GroupRef.current[i] = el)}
            data-bgcolor={group.background}
            id={group.title}
            className={"p-relative"}
          >
            {/* {if(demoToggle && ) }  */}
              <h1 
              className={"allFontsProps emotionTitle"}
              style={{fontFamily: demoToggle ? group.realFontFamily : 'Roboto Condensed'}}
              //  style={{(group.realFontFamily === "Aarcover" ? style = fontVariantCaps = "all-small-caps" : }}
              >
                {group.title}
              </h1>
            <p
              style={{
                width: "30em",
                position: "absolute",
                top: "8em"}}>
              {group.text_description}
            </p>
            <DemoBtn
             toggleValue={demoToggle}
             setToggleValue={setDemoToggle}
             style={{
              position: "absolute",
              right: "0",
              bottom: "5em"}}
             />
          </section>
        ))}


        {/* <EnjoymentSection 
          data={data}  
          demoToggle={demoToggle}
          state={demoToggle}
          changeState={setDemoToggle}
          ref={(el) => (GroupRef.current = el)}
        /> */}

        {/* {
          data.map((group, i) => (
            <AngerSection 
                ref={(el) => (GroupRef.current[i] = el)}
                data_bgcolor={group.background}
                id={group.title}
              />
              // console.log(group)
          ))
        } */}
      </main>
    </>
  );
}

export default App;
