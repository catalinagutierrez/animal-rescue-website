import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styles.css";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl } = item;

  return (
    <div className="wd-collection-item">
      <div
        className="wd-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="wd-collection-footer">
        <span className="wd-name">{name}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Adopt me!
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
