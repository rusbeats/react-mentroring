/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const ItemImage = props => (
  <div className="item-image">
    <img className="item-image" src={props.imageurl} />
  </div>
);
export default ItemImage;
