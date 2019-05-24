/* eslint-disable react/destructuring-assignment */
// @flow
import React from 'react';

// Homework 8: implemented Flow
 type ItemProps = {
  itemTitle: string
};

function ItemTitle(props: ItemProps) {
  return <span className="item-title">{props.itemTitle}</span>;
}
export default ItemTitle;
