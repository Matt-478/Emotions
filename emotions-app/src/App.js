import logo from './logo.svg';
import './App.css';

import ScrollingColorBackground from 'react-scrolling-color-background'

function App() {
  return (
    <>
      <p>
        All the basic emotions...
      </p>
      <div>
        <ScrollingColorBackground 
         selector='.js-color-stop[data-background-color]'
         colorDataAttribute='data-background-color'
         initialRgb='rgb(0, 0, 0)'/>
         <section data-background-color='rgb(102, 119, 97)' className='js-color-stop' />
         <section data-background-color='rgb(84, 94, 86)' className='js-color-stop' />
         <section data-background-color="rgb(145, 124, 120)" className='js-color-stop'></section>
         <section data-background-color="rgb(183, 148, 146)" className="js-color-stop"></section>
      </div>

      <p>YEAP</p>
    </>
  );
}

export default App;
