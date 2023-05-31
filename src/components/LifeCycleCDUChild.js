import React, { Component } from 'react'

export class LifeCycleCDUChild extends Component {
    constructor(props) {
      console.log('Constructor called')
      super(props)
    
      this.state = {
         greeting: " Child Hello!",
      }
    }

    updateGreezing = () => {
      console.log('update greeting called')
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === "Child Hello!" ? "Child Goodbye <3" : "Child Hello!"
            }
        })
    }

    componentDidUpdate() {
      console.log('component updated')
    }

  render() {
    console.log('under method called')
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.updateGreezing}>Update Greeting</button>
      </div>
    )
  }
}

export default LifeCycleCDUChild