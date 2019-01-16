import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class ActiveButton extends Component {
  render() {
    return (
      <Button
        variant="contained"
        style={{ margin: "30px 0 0 30px" }}
        onClick={this.props.onButtonClick}
      >
        {this.props.text}
      </Button>
    );
  }
}

export default ActiveButton;
