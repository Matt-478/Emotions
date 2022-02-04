import './App.css';
import React from 'react'
import Boops from './components/Boops'
import Background from './components/Background'

import ScrollingColorBackground from 'react-scrolling-color-background'

function App() {
  return (
    <>
      <p>
        All the basic emotions...
      </p>
      {/* <Background /> */}
      <Boops />
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

export default App;
