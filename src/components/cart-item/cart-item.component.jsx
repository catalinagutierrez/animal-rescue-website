import React from "react";

import "./cart-item.styles.css";

const CartItem = ({ item: { imageUrl, name } }) => (
  <div className="wd-cart-item">
    <img src={imageUrl} alt="item" />
    <div className="wd-item-details">
      <span>{name}</span>
    </div>
  </div>
);

export default CartItem;
