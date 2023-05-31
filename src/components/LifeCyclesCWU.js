import React, { Component } from 'react'
import LifeCycleCWUTracker from './LifeCyclesCWUTracker'

export class LifeCyclesCWU extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       visible: true
    }
  }

  toogleDisplay = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }))
  }


  render() {
    return (
      <div>
        {this.state.visible && <LifeCycleCWUTracker />}
        <button onClick={this.toogleDisplay}>Toogle. Display</button>
      </div>
    )
  }
}

export default LifeCyclesCWU