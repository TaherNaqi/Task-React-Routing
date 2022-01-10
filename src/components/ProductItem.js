import { Link } from "react-router-dom";
import React, { useEffect } from "react";
const ProductItem = (props) => {
  const product = props.product;
  useEffect(() => {
    document.title = `ProductList`;
  });
  return (
    <div className="productWrapper" onClick={() => props.setCookie(product)}>
      <Link to={`/productlist/${product.slug}`}>
        <img alt={product.name} src={`${product.image}`} />
      </Link>
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
    </div>
  );
};

export default ProductItem;
