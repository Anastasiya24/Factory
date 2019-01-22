import React from "react";
import TextField from "@material-ui/core/TextField";
import GradientButton from "../styledComponent/GradientButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

class ChangeProduct extends React.Component {
  state = {
    productName: this.props.currentProduct.product_name,
    productCost: this.props.currentProduct.cost
  };

  onHandleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  onClickChange = () => {
    let { currentProduct } = this.props;
    this.props.onChangeProduct(currentProduct.id, {
      product_name: this.state.productName,
      cost: this.state.productCost
    });
  };

  render() {
    return (
      <Dialog open={true} onClose={this.props.onCloseDialogWindows}>
        {console.log("ds: ", this.props.currentProduct)}
        <DialogTitle> Change product</DialogTitle>
        <DialogContent>
          <TextField
            id="multiline-flexible"
            label="Product"
            placeholder="Project name"
            className="project-name-card"
            value={this.state.productName}
            onChange={this.onHandleChange("productName")}
          />
          <br />
          <TextField
            id="multiline-flexible"
            label="Cost"
            placeholder="Project name"
            className="project-name-card"
            value={this.state.productCost}
            onChange={this.onHandleChange("productCost")}
          />
        </DialogContent>
        <DialogActions>
          <GradientButton
            style={{ margin: "20px 0px 7px" }}
            onClick={this.onClickChange}
          >
            Change product
          </GradientButton>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ChangeProduct;
