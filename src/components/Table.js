import React, { useState } from "react";
import Item from "./Item";
import Drawer from "./Drawer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MyModal from "./Modal";
import { useGlobalContext } from "./../context";

function DataTable() {
  const { items } = useGlobalContext();
  console.log(items);

  const [comparedItems, setComparedItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
    console.log(showModal);
  };
  const addToCompare = (x) => {
    setComparedItems((comparedItems) => [...comparedItems, x]);
    console.log({ comparedItems });
  };
  const removeFromCompare = (x) => {
    const filteredItems = comparedItems.filter(
      (product) => product.deal_id !== x.deal_id
    );
    setComparedItems(() => filteredItems);
    if (filteredItems.length === 0) {
      console.log("zero");
      handleClose();
    }
    console.log({ filteredItems });
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {items.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <Item
                  key={item.id}
                  comparedItems={comparedItems}
                  addToCompare={addToCompare}
                  removeFromCompare={removeFromCompare}
                  {...item}
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {comparedItems.length > 0 && (
        <Drawer handleOpen={handleOpen} comparedItems={[...comparedItems]} />
      )}

      {showModal && (
        <MyModal
          open={showModal}
          onClose={() => setShowModal(false)}
          comparedItems={comparedItems}
        />
      )}
    </>
  );
}

export default DataTable;
