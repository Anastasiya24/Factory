import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import GoodsItems from "./GoodsItems";

class CreateOrder extends React.Component {
  state = {
    userId: "",
    goodsList: []
  };

  handleChange = name => event => {
    if (name === "goodsList") {
      let goodsArray = [];
      for (let key in this.state.goodsList) {
        goodsArray[key] = this.state.goodsList[key];
      }
      let currentElement = this.props.goods.find(
        el => el.id === event.target.value
      );
      goodsArray.push(currentElement);
      this.setState({
        goodsList: goodsArray
      });
    } else
      this.setState({
        [name]: event.target.value
      });
  };

  onDeleteGoodItem = id => {
    let oldGoodsList = [];
    for (let key in this.state.goodsList) {
      oldGoodsList[key] = this.state.goodsList[key];
    }
    let newGoodsList = oldGoodsList.filter(el => el.id !== id);
    this.setState({
      goodsList: newGoodsList
    });
  };

  render() {
    return (
      <Dialog open={true} onClose={this.props.onClosePopup}>
        <DialogTitle>New User </DialogTitle>
        <DialogContent>
          <TextField
            select
            label="User"
            value={this.state.userId}
            onChange={this.handleChange("userId")}
            style={{ minWidth: 300, margin: 15 }}
            variant="outlined"
          >
            {this.props.usersList.map(el => (
              <MenuItem key={el.id} value={el.id}>
                {el.user_name}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <TextField
            select
            label="Goods"
            value={""}
            onChange={this.handleChange("goodsList")}
            style={{ minWidth: 300, margin: 15 }}
            variant="outlined"
          >
            {this.props.goods.map(el => (
              <MenuItem key={el.id} value={el.id}>
                {el.product_name}
              </MenuItem>
            ))}
          </TextField>
          <GoodsItems
            goodsList={this.state.goodsList}
            onDeleteGoodItem={this.onDeleteGoodItem}
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => this.props.onAddOrder(this.state)}
          >
            add order
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

CreateOrder.defaultProps = {
  usersList: [],
  goods: []
};

export default CreateOrder;