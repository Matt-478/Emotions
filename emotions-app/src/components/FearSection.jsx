import React, { Component } from 'react'
import { data } from '../data'

export default class FearSection extends Component {
  render() {
    let fearObj = data.find((obj) => {
      if(obj.title === "Fear") {
        return obj.emotionProps
      }
    })
    console.log(fearObj)
    return (
      <>
      {/* <section 
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
            </h1> */}
          <p
            style={{
              width: "30em",
              position: "absolute",
              top: "8em"}}>
            {/* {enjoymentObj.text_description} */}
          </p>
          {/* <DemoBtn
           toggleValue={this.props.demoToggle}
           setToggleValue={this.props.changeState}
           style={{
            position: "absolute",
            right: "0",
            bottom: "5em"}}
           /> */}
        {/* </section> */}
      </>
    )
  }
}
