import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart } from "../../redux/cart/cart.actions";

import "./adoption-item.styles.css";

const AdoptionItem = ({ cartItem, clearItem }) => {
  const { name, imageUrl } = cartItem;
  return (
    <div className="wd-adoption-item">
      <div className="wd-image">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="wd-text">{name}</span>
      <div className="wd-remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(AdoptionItem);
