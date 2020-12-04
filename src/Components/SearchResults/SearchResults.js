import React from "react";
import "./SearchResults.css";

export class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        // this.state.searchResults
        <add_track_list_component />
      </div>
    );
  }
}
