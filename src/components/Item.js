import React, { useState } from "react";
import ProviderInfo from "./ProviderInfo";
// import CompareButton from "./Button";
import Drawer from "./Drawer";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function Item({
  item,
  // monthly_price,
  // internet_speed,
  // set_up_cost,
  // broadband_type,
  // contract_info,
  addToCompare,
  removeFromCompare,
  comparedItems,
  // deal_id,
}) {
  return (
    <>
      <TableCell component="th" scope="row">
        <ProviderInfo {...item} />
      </TableCell>
      <TableCell align="right">
        £{item.monthly_price}
        <Grid item>Monthy Cost</Grid>
      </TableCell>
      <TableCell align="right">
        <Grid>
          <Grid item>{item.internet_speed} Mbps</Grid>
          <Grid item>{item.broadband_type} Speed</Grid>
        </Grid>
      </TableCell>
      <TableCell align="right">
        <Grid>£{item.set_up_cost}</Grid>
        <Grid item>Setup Costs</Grid>
      </TableCell>
      <TableCell align="right">
        <Grid>
          <Grid item> {item.contract_info}</Grid>
          <Grid item>Contract</Grid>
        </Grid>
      </TableCell>
      <TableCell align="center">
        {comparedItems && comparedItems.includes(item) ? (
          <Button variant="contained" onClick={() => removeFromCompare(item)}>
            remove from compare
          </Button>
        ) : (
          <Button variant="contained" onClick={() => addToCompare(item)}>
            Add to compare
          </Button>
        )}
      </TableCell>
    </>
  );
}
// onClick={() => toggleDrawer(item)}
