import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         category: 'website',
         comment: ''
      }
    }
    handleNameChange = (event) => {
        this.setState ({
            name: event.target.value,
        })
    }
    handleCategoryChange = (event) => {
        this.setState ({
            category: event.target.value
        })
    }
    handleCommentChange = (event) => {
        this.setState ({
            comment: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
    }
    // handleChange = (event) => {
    //     const {name, value} = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor='id-name'>Your name:</label>
                <input 
                    value={this.state.name} 
                    onChange={this.handleNameChange}
                    type='text' 
                    id='id-name' 
                    name='name'
                />
            </div>
            <div>
                <label htmlFor='id-category' >Your name:</label>
                <select 
                    value={this.state.category}
                    onChange={this.handleCategoryChange}
                    id='id-category' 
                    name='category'>
                    <option value='website'>Website issue</option>
                    <option value='order'>Order issue</option>
                    <option value='general'>General inquiry</option>
                </select>
            </div>
            <div>
                <label htmlFor='id-comment'>Comment</label>
                <textarea
                    value={this.state.comment}
                    onChange={this.handleCommentChange}
                    id='id-comment' 
                    name='comment'/>
            </div>
            <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}

export default ControlledForm