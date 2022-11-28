import React, { Component } from "react";
import Card from "./Card/Card";
import Header from "./Header/Header";
import './HomePage.css'

export class Homepage extends Component {
  render() {
    return (
      <div>
        <Header fetchData={this.props.fetchData} />
        <div className="homepage-box">
          {this.props.data.map((char) => <Card key={char.id} char={char} fetchCharacter={this.props.fetchCharacter} />)}
        </div>
      </div>
    );
  }
}

export default Homepage;
