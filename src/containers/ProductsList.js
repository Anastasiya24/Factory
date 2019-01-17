import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    opacity: 0.9,
    margin: 10,
    backgroundColor: theme.palette.background.paper
  }
});

class ProjectsList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography
          style={{
            margin: 10
          }}
          variant="subheading"
        >
          Products
        </Typography>
        <List className={classes.root} component="nav">
          {this.props.projectsList &&
            this.props.projectsList.map(el => (
              <ListItem key={el.productName} button>
                <ListItemText primary={`${el.productName} - ${el.cost}`} />
              </ListItem>
            ))}
        </List>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ProjectsList);
