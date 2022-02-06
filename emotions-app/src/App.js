import './App.css';
import React, { useRef, useEffect } from 'react'

import { data } from './data'

function App() {
  const GroupRef = useRef([])

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

  return (
    <>
      <main>
        {data.map((group, i) => (
          <section 
            ref={(el) => (GroupRef.current[i] = el)}
            data-bgcolor={group.background}
          >
            <h1>{group.title}</h1>
          </section>
        ))}
      </main>
    </>
  );
}

export default App;
