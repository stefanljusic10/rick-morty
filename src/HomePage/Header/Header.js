import React, { Component } from 'react'
import './Header.css'

export class Header extends Component {

  render() {
    return (
      <header>
        <button onClick={() => this.props.goToHomepage()}>Rick & Morty</button>
        <button onClick={() => this.props.fetchData()}>fetch data</button>
    </header>
    )
  }
}

export default Header