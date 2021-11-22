// import React, { useState, useEffect } from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";

// import axios from "axios";
export default function Item({
  provider_name,
  deal_name,
  monthly_price,
  internet_speed,
  set_up_cost,
  provider_logo_image_url,
  provider_rating,
  broadband_type,
  contract_info,
}) {
  //   {item.map((x)=> console.log(x)}
  return (
    <div>
      hello from {provider_name}
      {console.log(provider_name)}
      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {" "}
          <TableBody>
            {item.map((row) => (
              <TableRow
                key={row.provider_name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Grid container>
                   <Grid item><img src={} alt=""/></Grid>
                    <Grid item><Box>{row.provider_name}</Box></Grid>
                  </Grid>
                </TableCell>
                <TableCell align="right">{row.monthly_price}</TableCell>
                <TableCell align="right">{row.internet_speed}</TableCell>
                <TableCell align="right">{row.set_up_cost}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
      {/* Hello{" "}
      {item.map((x, index) => {
        return (
          <div>
            <p>{x.provider_name}</p>
            <img src={x.provider_logo_image_url} />
          </div>
        );
      })}
      {console.log({ item })} */}
    </div>
  );
}
