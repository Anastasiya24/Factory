import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    opacity: 0.9,
    margin: 10,
    backgroundColor: theme.palette.background.paper
  }
});

class FactoriesList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <List className={classes.root} component="nav">
          {this.props.factoriesList &&
            this.props.factoriesList.map(fb => (
              <ListItem key={fb.factory_id} button onClick={() => this.props.onClickToFactory(fb.factory_id)}>
                <ListItemText primary={fb.factory_name} />
              </ListItem>
            ))}
        </List>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(FactoriesList);
