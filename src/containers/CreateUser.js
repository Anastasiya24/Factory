import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class CreateUser extends React.Component {
  state = {
    userName: "",
    userEmail: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <Typography variant="subheading"> New User </Typography>
        <div>
          <TextField
            id="outlined-name"
            label="Name"
            value={this.state.userName}
            onChange={this.handleChange("userName")}
            variant="outlined"
            style={{ margin: 20 }}
          />
          <br />
          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            name="email"
            value={this.state.userEmail}
            onChange={this.handleChange("userEmail")}
            variant="outlined"
            style={{ margin: 20 }}
          />
        </div>
        <Button
          color="primary"
          variant="outlined"
          style={{ margin: "0px 0 0 30px" }}
          onClick={() => this.props.onAddNewUser(this.state)}
        >
          add user
        </Button>
      </div>
    );
  }
}

export default CreateUser;
