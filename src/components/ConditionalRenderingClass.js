import React, { Component } from 'react'
import UserMessage from './UserMessage'
import UserData from './UserData'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: false,
      }
    }

    handleSignIn = () => {
        this.setState ({
            isLoggedIn: true
        })
    }

    handleSignOut = () => {
        this.setState ({
            isLoggedIn: false
        })
    }

    render() {
        return (
        <div>
            <UserData isLoaded={this.state.isLoaded}/>
            <UserMessage 
                handleSigneIn={this.handleSignIn}
                handleSigneOut={this.handleSignOut}
                isLoggedIn={this.state.isLoggedIn}/>
        </div>
        )
    }
}

export default ConditionalRenderingClass