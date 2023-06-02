import React, { Component } from 'react'
import importedNames from "../names"
import names from '../names'

export class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        names: importedNames,
      }
    }
    handleClick = (event) => {
        let inputText = event.target.value.toLowerCase()
        console.log(inputText)
        let filteredNames = importedNames.filter(name => {
            return name.toLocaleLowerCase().includes(inputText)
        })
        this.setState({
            names: filteredNames,
        })
    }
  render() {
    return (
      <div>
        <h1>Name Serach</h1>
        <p>matching names found: {names.length}</p>
        <form>
            <input onChange={(event) => this.handleClick(event)} type='text' placeholder='search names...'/>
        </form>
        <div>
            {this.state.names.map(name => {
                return <p key={name}>{name}</p>
            })}
        </div>
      </div>
    )
  }
}

export default SearchBar