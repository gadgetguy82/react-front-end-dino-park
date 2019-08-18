import React, { Component } from "react";
import TransferButton from "./TransferButton"
import AddDinosaurButton from "./AddDinosaurButton"
import AddPaddockButton from "./AddPaddockButton"
import FeedButton from "./FeedButton"

class ButtonList extends Component {
  render() {
    return (
      <div className="button-list">
        <TransferButton/>
        <AddDinosaurButton/>
        <AddPaddockButton/>
        <FeedButton/>
      </div>
    );
  }
}

export default ButtonList;
