import React, { Component } from "react";
import "./checkbox.css";
import blueCheck from "../../images/checkbox-blue-checked.png";
import blueBox from "../../images/checkbox-blue.png";
import blackCheck from "../../images/checkbox-black-checked.png";
import blackBox from "../../images/checkbox-black.png";

export class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }
  toggleCheck = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };
  render() {
    if (this.props.black) {
      return (
        <div class="checkboxLabel">
          <div className="checkContainer">
            <input
              className="checkbox"
              type="checkbox"
              onClick={this.toggleCheck}
              checked={this.state.isChecked}
            />
            {this.state.isChecked ? (
              <img className="checkImage" src={blackCheck} />
            ) : (
              <img className="checkImage" src={blackBox} />
            )}
          </div>
          <p>{this.props.label}</p>
        </div>
      );
    }
    if (this.props.blue) {
      return (
        <div class="checkboxLabel">
          <div className="checkContainer">
            <input
              className="checkbox"
              type="checkbox"
              onClick={this.toggleCheck}
              checked={this.state.isChecked}
            />
            {this.state.isChecked ? (
              <img className="checkImage" src={blueCheck} />
            ) : (
              <img className="checkImage" src={blueBox} />
            )}
          </div>
          <p>{this.props.label}</p>
        </div>
      );
    }
  }
}

export default Checkbox;