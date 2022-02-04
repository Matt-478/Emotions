import ScrollingColorBackground from 'react-scrolling-color-background'
import React from 'react'
import chroma from "chroma-js";

function Background() {
  return (
    <>
      <ScrollingColorBackground
        selector='.js-color-stop[data-background-color]'
        colorDataAttribute='data-background-color'
        initialRgb='rgb(0, 0, 0)'
      />
      ...
      <section
        data-background-color='rgb(32, 202, 172)'
        className='js-color-stop'
      >Some content</section>
      ...
      <section
        data-background-color='rgb(60, 191, 246)'
        className='js-color-stop'
      />Some other content
    </>
  );
}

export default Background;
