import React, { Component } from 'react'
import './Header.css'

export class Header extends Component {

  render() {
    return (
      <header>
        <p>Rick & Morty</p>
        <button onClick={() => this.props.fetchData()}>fetch data</button>
    </header>
    )
  }
}

export default Header