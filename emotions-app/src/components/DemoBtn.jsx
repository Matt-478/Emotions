import React from 'react'

export default function DemoBtn({ toggleValue, setToggleValue }) {
  return (
    <div 
      className="demo_btn"
      onClick={() => setToggleValue(!toggleValue)}
      >
        {toggleValue ? 
        <h2>true</h2> : 
        <h2>false</h2>}
    </div>
  )
}