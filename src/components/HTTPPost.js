import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post: null
      }
    }
    postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts', {
                title: 'Hello World',
                body: 'It Works',
                userID: 123,
            }
        ).then(response => 
            this.setState({
                post: response.data
            }))
    }

  render() {
    const {post} = this.state
    return (
      <div>
        <button onClick={this.postToApi}>
            Create Post
        </button>
        {
            post ? (
                <div>
            <h1>{post.title}</h1>
            <p>{post.userID}</p>
            <p>{post.body}</p>
        </div>
            ) : (
                <p>Please click the button</p>
            )
        }
      </div>
    )
  }
}

export default HTTPPost