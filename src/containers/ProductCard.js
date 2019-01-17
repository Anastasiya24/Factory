import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import ButtonClose from "./ButtonIcon/ButtonClose";
import ButtonAdd from "./ButtonIcon/ButtonAdd";
import "./style.css";

class ProductCard extends React.Component {
  state = {
    productName: "",
    cost: ""
  };

  onClickAddVersion = () => {
    this.props.onAddNewProduct(this.state)
    this.props.onCloseProductCard();
  };

  onHandleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { onCloseProductCard } = this.props;
    const { productName, cost } = this.state;
    return (
      <Card className="project-card">
        <CardContent>
          <ButtonClose handleClose={onCloseProductCard} />
          <TextField
            id="multiline-flexible"
            label="Product"
            placeholder="Project name"
            className="project-name-card"
            value={productName}
            onChange={this.onHandleChange("productName")}
          />
          <br />
          <TextField
            id="multiline-flexible"
            label="Cost"
            placeholder="Project name"
            className="project-name-card"
            value={cost}
            onChange={this.onHandleChange("cost")}
          />
        </CardContent>
        <div className="block-with-button-add">
          <ButtonAdd onClickAddVersion={this.onClickAddVersion} />
        </div>
      </Card>
    );
  }
}

export default ProductCard;
