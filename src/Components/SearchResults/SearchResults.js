import React from "react";
import "./SearchResults.css";

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <add_track_list_component />
      </div>
    );
  }
}