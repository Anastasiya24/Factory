import React from "react";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const GradientButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px"
});

class FactoriesAddNew extends React.Component {
  state = {
    factoryName: "",
    description: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div
        style={{
          margin: 30,
          display: "inline-block",
          padding: 30,
          border: "3px solid white"
        }}
      >
        <Typography
          style={{ marginTop: 10, display: "inline-block" }}
          variant="subheading"
        >
          Add a new factory
        </Typography>
        <br />
        <TextField
          style={{ margin: "10px 0px" }}
          label="Name of factory"
          value={this.state.factoryName}
          onChange={this.handleChange("factoryName")}
        />
        <br />
        <TextField
          style={{ margin: "10px 0px" }}
          label="Description of factory"
          value={this.state.description}
          onChange={this.handleChange("description")}
        />
        <br />
        <GradientButton
          style={{ margin: "20px 0px 7px" }}
          onClick={() => this.props.onAddFactory(this.state)}
        >
          Add a factory
        </GradientButton>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapDispatchToProps)(FactoriesAddNew);
