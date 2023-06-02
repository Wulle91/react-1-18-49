import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
      super(props)
      this.inputName = React.createRef()
      this.inputCategory = React.createRef()
      this.inputComment = React.createRef()
    }
  
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputName.current.value)
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
                    type='text' 
                    id='id-name' 
                    name='name'
                    defaultValue="John Smith"
                    ref={this.inputName}
                />
            </div>
            <div>
                <label htmlFor='id-category' >Your name:</label>
                <select 
                    id='id-category' 
                    name='category'
                    ref={this.inputCategory}>
                    <option value='website'>Website issue</option>
                    <option value='order'>Order issue</option>
                    <option value='general'>General inquiry</option>
                </select>
            </div>
            <div>
                <label htmlFor='id-comment'>Comment</label>
                <textarea
                    id='id-comment' 
                    name='comment'
                    ref={this.inputComment}/>
            </div>
            <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}

export default UncontrolledForm