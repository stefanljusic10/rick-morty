import React, { Component } from 'react'
import Header from '../HomePage/Header/Header';
import './CharPage.css'

export class CharPage extends Component {
  render() {
    return (
      <div>
        <Header />  
        <div className='character'>
          <h1>{this.props.character.name}</h1>
          <div>
            
            <h2>{this.props.character.status}</h2>
          </div>
          <img src={this.props.character.image} />
        </div>
      </div>
    )
  }
}

export default CharPage