import React, { useState } from "react";
import ProviderInfo from "./ProviderInfo";
// import CompareButton from "./Button";
import Drawer from "./Drawer";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function Item({
  monthly_price,
  internet_speed,
  set_up_cost,
  broadband_type,
  contract_info,
  ...item
}) {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }

    setOpen(!open);
    console.log(open);
  };

  return (
    <>
      <Drawer toggle={toggleDrawer} state={open} />
      <TableCell component="th" scope="row">
        <ProviderInfo {...item} />
      </TableCell>
      <TableCell align="right">
        £{monthly_price}
        <Grid item>Monthy Cost</Grid>
      </TableCell>
      <TableCell align="right">
        <Grid>
          <Grid item>{internet_speed} Mbps</Grid>
          <Grid item>{broadband_type} Speed</Grid>
        </Grid>
      </TableCell>
      <TableCell align="right">
        <Grid>£{set_up_cost}</Grid>
        <Grid item>Setup Costs</Grid>
      </TableCell>
      <TableCell align="right">
        <Grid>
          <Grid item> {contract_info}</Grid>
          <Grid item>Contract</Grid>
        </Grid>
      </TableCell>
      <TableCell align="center">
        <Button variant="contained" onClick={() => toggleDrawer(open)}>
          Add to compare
        </Button>
      </TableCell>
    </>
  );
}
