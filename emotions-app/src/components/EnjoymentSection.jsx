import React, { Component } from 'react'
import DemoBtn from './DemoBtn'

export default class EnjoymentSection extends Component {
  // constructor(props){
  //   super(props)
  // }

  render() {
    let enjoymentObj = this.props.data.find( ({title}) => {
      if (title === "Enjoyment") {
        return title
      }
    })
    console.log(enjoymentObj)
    return (
      // <div>
        <section 
          // ref={(el) => (GroupRef.current[i] = el)}
          // data-bgcolor={enjoymentObj.background}
          // id={enjoymentObj.title}
          className={"p-relative"}
          ref={this.props.ref}

          data-bgcolor={this.props.data_bgcolor}
          id={this.props.id}
          >
            <h1 
            className={"allFontsProps emotionTitle"}
            style={{fontFamily: this.props.demoToggle ? enjoymentObj.realFontFamily : 'Roboto Condensed'}}
            >
              {enjoymentObj.title}
            </h1>
          <p
            style={{
              width: "30em",
              position: "absolute",
              top: "8em"}}>
            {enjoymentObj.text_description}
          </p>
          <DemoBtn
           toggleValue={this.props.demoToggle}
           setToggleValue={this.props.changeState}
           style={{
            position: "absolute",
            right: "0",
            bottom: "5em"}}
           />
        </section>
        
      /* </div> */
    )
  }
}