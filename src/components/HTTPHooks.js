import React, {useState, useEffect} from 'react'
import axios from 'axios'

function HTTPHooks() {
    const [posts, addPosts] = useState([])
    const [error, addError] = useState(null)
    const [message, postMessage] = useState('')
    const postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts', {
                title: 'Hello World',
                body: 'It Works',
                userID: 123,
            }
        ).then(response => {
            postMessage(response.status === 201 ? `Success! Title: ${response.data.title}` : 'NOT')
        })
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            addPosts(Array.isArray(response.data) ? response.data : [response.data])     
        }).catch(error => {
            addError(error.message)
        }
            
        )
    }, [])
  return (
    <div>
        <button onClick={postToApi}>
            Create Post
        </button>
        <p>{message}</p>
        <h2>Posts:</h2>
         {
            posts.length ? (posts.map(post => (
                <div key={post.id}>
                    <h3>{post.id}. {post.title}</h3>
                    <h4>By User ID {post.userID}</h4>
                    <p>{post.body}</p>
                    <hr/>
                </div>
            ))) : (
                error
                ? <p>{error}</p>
                : <h2>Loading...</h2>
            )
         }
    </div>
  )
}

export default HTTPHooks