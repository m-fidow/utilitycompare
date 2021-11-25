import React, { useState } from "react";
import Item from "./Item";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Drawer from "./Drawer";
// import Button from "@mui/material/Button";

import TableContainer from "@mui/material/TableContainer";

import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function DataTable({ items }) {
  // {
  //   console.log({ items });
  // }
  const [open, setOpen] = useState(true);
  const [comparedItems, setComparedItems] = useState([]);
  // const toggleDrawer = (product) => {
  //   // addToCompare(product);
  //   setOpen(true);

  //   console.log(open);
  // };
  const addToCompare = (x) => {
    setComparedItems((comparedItems) => [...comparedItems, x]);
    console.log(x.provider_name);
    console.log({ comparedItems });
    console.log(comparedItems.length);
  };
  const removeFromCompare = (x) => {
    const filteredItems = comparedItems.filter(
      (product) => product.deal_id !== x.deal_id
    );
    console.log({ filteredItems });
    setComparedItems(() => filteredItems);
    // console.log({ filteredItems });
    console.log(x.deal_id);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.deal_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <Item
                key={item.deal_id}
                comparedItems={comparedItems}
                addToCompare={addToCompare}
                removeFromCompare={removeFromCompare}
                item={item}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Drawer state={open} />
    </TableContainer>
  );
}

export default DataTable;
