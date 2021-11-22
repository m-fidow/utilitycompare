// import React, { useState, useEffect } from "react";
import ProviderInfo from "./ProviderInfo";
import TableCell from "@mui/material/TableCell";

// import axios from "axios";
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
      <TableCell align="right">{monthly_price}</TableCell>
      <TableCell align="right">{internet_speed}</TableCell>
      <TableCell align="right">{set_up_cost}</TableCell>
      <TableCell align="right">{contract_info}</TableCell>
    </>
  );
}
