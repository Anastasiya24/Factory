import React from "react";
import Chip from "@material-ui/core/Chip";

class GoodsItems extends React.Component {
  render() {
    const { goodsList } = this.props;
    return (
      <div>
        {goodsList.map(el => (
          <Chip
            key={el.id}
            label={el.product_name}
            onDelete={() => this.props.onDeleteGoodItem(el.id)}
          />
        ))}
      </div>
    );
  }
}

GoodsItems.defaultProps = {
  goodsList: []
};


export default GoodsItems;
