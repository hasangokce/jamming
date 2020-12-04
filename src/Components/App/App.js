import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "name1", artist: "artist1", album: "album1", id: "1" }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span class="highlight">mmm</span>ing
        </h1>
        <div class="App">
          <div class="App-playlist" />
        </div>
      </div>
    );
  }
}
