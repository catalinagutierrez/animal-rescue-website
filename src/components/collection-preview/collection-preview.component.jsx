import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.css";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <div className="wd-collection-preview">
    <h1 className="wd-title">{title.toUpperCase()}</h1>
    <div className="wd-preview"></div>

    <div className="wd-preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
