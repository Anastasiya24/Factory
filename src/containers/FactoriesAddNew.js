import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import GradientButton from "../styledComponent/GradientButton";
import ProductCard from "./ProductCard";
import ProjectsList from "./ProductsList";

class FactoriesAddNew extends React.Component {
  state = {
    factoryName: "",
    description: "",
    productCard: null,
    productList: []
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  onOpenProductCard = () => {
    this.setState({ productCard: true });
  };

  onCloseProductCard = () => {
    this.setState({ productCard: false });
  };

  onAddNewProduct = product => {
    let { productList } = this.state;
    let newProductList = productList;
    newProductList.push(product);
    this.setState({
      productList: newProductList
    });
  };

  onSaveFactory = () => {
    let { factoryName, description, productList } = this.state;
    if (factoryName !== "" && description !== "" && productList.length !== 0)
      this.props.onAddFactory(this.state);
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
        {!this.state.productCard && (
          <Typography
            style={{
              marginTop: 10,
              display: "inline-block",
              border: "1px solid black",
              borderRadius: 10,
              padding: 10,
              cursor: "pointer"
            }}
            variant="subheading"
            onClick={this.onOpenProductCard}
          >
            Add a product
          </Typography>
        )}
        <br />
        {this.state.productList.length !== 0 && (
          <ProjectsList projectsList={this.state.productList} />
        )}
        <br />
        {this.state.productCard && (
          <ProductCard
            onCloseProductCard={this.onCloseProductCard}
            onAddNewProduct={this.onAddNewProduct}
          />
        )}
        <GradientButton
          style={{ margin: "20px 0px 7px" }}
          onClick={this.onSaveFactory}
        >
          Add a factory
        </GradientButton>
      </div>
    );
  }
}

export default FactoriesAddNew;
