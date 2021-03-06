import React, { Component } from 'react'
import TypeIt from 'typeit';
export default class typewritter extends Component {
  state = {
    onAnimation: true
  }
  typeTitle = (callback = () => {})  => {
    new TypeIt('.type_intro.active', {
      speed: 50,
      waitUntilVisible: true
    })
    .type("Hi? ")
    .pause(500)
    .delete(4)
    .type("Uhmm, Hello?")
    .pause(500)
    .delete(12)
    .type("Ugh, okay okay ...")
    .pause(600)
    .delete(90)
    .type("Hi, I'm <span id='highlight'>Aldrin Lim</span>. A Full Stack Developer from Philippines. Lets build you a beautiful website or a cool web application :)")
    .exec(async () => {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          this.setState({ onAnimation: false })
        },500)
      })
    })
    .go()
  }

  typeDescription = () => {
    const description = "Im a Software Developer from Philippines. Also a <span id='highlight'>Fullstack Developer</span>. I can build you a beautiful website or a cool web application :)"
    new TypeIt('#type_description', {
      speed: 40,
      waitUntilVisible: true
    }).type(description).go();
  }
  componentDidMount = () => {
    this.typeTitle(this.typeDescription);
  }
  render() {
    
    return (
      <div id="typewritter">
        <h1 className="type_intro active"></h1>
        <div className={`seemycv ${!this.state.onAnimation && "show"}`}>
          <a href="#">View Resume</a>
        </div>  
        
      </div>
    )
  }
}
