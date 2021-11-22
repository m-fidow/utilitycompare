import React from "react";
import Item from "./Item";
function Table({ items }) {
  return (
    <div>
      {items.map((item, index) => {
        console.log(item);
        return <Item key={index} {...item} />;
      })}
    </div>
  );
}

export default Table;
