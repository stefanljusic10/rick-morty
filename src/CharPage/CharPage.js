import React, { Component } from "react";
import "./CharPage.css";

export class CharPage extends Component {
  render() {
    return (
      <div className="character">
        <h1>{this.props.character.name}</h1>
        <div className="status">
          <span className="bulb"></span>
          <h2>{this.props.character.status}</h2>
        </div>
        <img src={this.props.character.image} alt="img" />
      </div>
    );
  }
}

export default CharPage;
