import React, { useState } from "react";
import Item from "./Item";
import Drawer from "./Drawer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MyModal from "./Modal";

function DataTable({ items }) {
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
      <TableContainer component={Paper} sx={{ backgroundColor: "#f8f8f8" }}>
        <Table
          size="small"
          sx={{
            minWidth: 650,
            width: "75%",
            margin: "5% auto",
            border: "1px solid #ecebeb",
            borderCollapse: "inherit",
            borderRadius: "20px",
            backgroundColor: "#fff",
          }}
          aria-label="simple table"
        >
          <TableBody sx={{}}>
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
