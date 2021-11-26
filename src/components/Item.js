import ProviderInfo from "./ProviderInfo";
// import CompareButton from "./Button";
import Drawer from "./Drawer";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function Item({
  monthly_price,
  internet_speed,
  set_up_cost,
  broadband_type,
  contract_info,
  addToCompare,
  removeFromCompare,
  comparedItems,
  provider_rating,
  ...item
}) {
  return (
    <>
      <TableCell component="th" scope="row">
        <ProviderInfo
          {...item}
          rating={
            <Rating
              name="half-rating-read"
              defaultValue={provider_rating * 5}
              precision={0.1}
              readOnly
            />
          }
        />
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
