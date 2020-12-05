import React from "react";
import data from "../data";

const ProductScreen = (props) => {
  const product = data.products.find(
    (x) => x._id === this.props.match.params.id,
  );
  return (
    <div className="row">
      <div className="col-2">
        <img src={product.imge} alt={product.name}></img>
      </div>
      <div className="col-1"></div>
      <div className="col-1"></div>
    </div>
  );
};

export default ProductScreen;
