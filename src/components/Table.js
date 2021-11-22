import React from "react";
import Item from "./Item";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
function DataTable({ items }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {items.map((item, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Item key={index} {...item} />
              </TableCell>
              {/* <TableCell component="th" scope="row">
                  <Grid container>
                   <Grid item><img src={} alt=""/></Grid>
                    <Grid item><Box>{row.provider_name}</Box></Grid>
                  </Grid>
                </TableCell>
                <TableCell align="right">{row.monthly_price}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
