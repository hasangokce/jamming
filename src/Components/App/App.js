import React from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "name1", artist: "artist1", album: "album1", id: "1" },
        { name: "name2", artist: "artist2", album: "album2", id: "2" },
        { name: "name3", artist: "artist3", album: "album3", id: "3" }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          /* Add a SearchBar component */
          <SearchBar />
          <div className="App-playlist">
            // Add a SearchResults component --
            <SearchResults searchResults={this.state.searchResults} />
            // Add a Playlist component --
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}
