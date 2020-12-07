import React from "react";
import "./Track.css";

export default class Track extends React.Component {
  renderAction() {
    if (isRemoval) {
      // Button +
    } else {
      // button shows -
    }

    // Set the class name to Track-action. ???
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3 contenteditable="true">{this.props.track.name}</h3>
          <p contenteditable="true">{this.props.track.artist}</p>
        </div>
        <button className="Track-action">+</button>
      </div>
    );
  }
}
