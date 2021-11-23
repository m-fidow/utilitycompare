// import React, { useState, useEffect } from "react";
import ProviderInfo from "./ProviderInfo";
import TableCell from "@mui/material/TableCell";
import Grid from "@mui/material/Grid";

export default function Item({
  monthly_price,
  internet_speed,
  set_up_cost,
  broadband_type,
  contract_info,
  ...item
}) {
  //   {item.map((x)=> console.log(x)}
  return (
    <>
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
    </>
  );
}
