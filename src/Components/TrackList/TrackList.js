import React from "react";
import "./TrackList.css";

import Track from "../Track/Track.js";

export default class TrackList extends React.Component {
  render() {
    console.log("TrackList.js");
    console.log(this.props.tracks);
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => {
          return (
            <Track
              track={track}
              key={track.id}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove}
            />
          );
        })}
      </div>
    );
  }
}
