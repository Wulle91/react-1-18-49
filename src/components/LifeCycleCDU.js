import React, { Component } from 'react'
import LifeCycleCDUChild from './LifeCycleCDUChild'

export class LifeCycleCDU extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         greeting: "Hello!",
      }
    }

    updateGreezing = () => {
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === "Hello!" ? "Goodbye :P" : "Hello!"
            }
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.updateGreezing}>Update Greeting</button>
        <LifeCycleCDUChild />
      </div>
    )
  }
}

export default LifeCycleCDU