import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.css";

const CartIcon = ({ toggleCartHidden, cartItems }) => (
  <div className="wd-cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="wd-shopping-icon" />
    <span className="wd-item-count">{cartItems.length}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
