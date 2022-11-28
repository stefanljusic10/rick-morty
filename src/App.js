import React, { Component } from 'react'
import HomePage from './HomePage/HomePage'
import CharPage from './CharPage/CharPage'
import './App.css'

export class App extends Component {
  constructor(){
    super()
    this.state = {
      isOnHomePage: true,
      isOnCharPage: false,
      data: [],
      character: {}
    }
  }

  fetchData = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.results }));
  };

  fetchCharacter = (id) => {
    this.setState({ isOnHomePage: false })
    this.setState({ isOnCharPage: true })

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(res => this.setState({ character: res }))
  }

  render() {
    return (
      <div>
        { this.state.isOnHomePage && <HomePage fetchData={this.fetchData} fetchCharacter={this.fetchCharacter} data={this.state.data} /> }
        { this.state.isOnCharPage && <CharPage character={this.state.character} /> }
      </div>
    )
  }
}

export default App