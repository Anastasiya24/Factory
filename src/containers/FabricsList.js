import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
//redux
import { connect } from "react-redux";
import { showFabricList } from "../actions/showFabricList";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    opacity: 0.9,
    margin: 10,
    backgroundColor: theme.palette.background.paper
  }
});

class FabricsList extends React.Component {
  componentDidMount() {
    this.props.showFabricList();
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography  style={{ margin: 30 }} variant="display1">List of the factories</Typography>
        <List className={classes.root} component="nav">
          {this.props.fabricsList &&
            this.props.fabricsList.map(fb => (
              <ListItem key={fb.id} button>
                <ListItemText primary={fb.name} />
              </ListItem>
            ))}
        </List>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    fabricsList: state.fabric.fabricsList
  };
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { showFabricList }
  )(FabricsList)
);