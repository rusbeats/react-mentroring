import React from 'react';

const ItemImage = props => (
    <div className="item-image">
        <img className="item-image" src={props.imageURL} />
    </div>);
export default ItemImage;
