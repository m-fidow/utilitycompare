import ProviderInfo from "./ProviderInfo";
// import CompareButton from "./Button";

import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import { Typography } from "@mui/material";

export default function Item({
  item,

  addToCompare,
  removeFromCompare,
  comparedItems,
}) {
  return (
    <>
      <TableCell component="th" scope="row">
        <ProviderInfo
          {...item}
          rating={
            <Rating
              name="half-rating-read"
              defaultValue={item.provider_rating * 5 ?? " "}
              precision={0.1}
              size="small"
              readOnly
            />
          }
        />
      </TableCell>
      <TableCell align="center">
        <Typography
          component="h5"
          variant="h6"
          textAlign="center"
          color="primary"
        >
          <strong>£{item.monthly_price}</strong>
        </Typography>
        <Grid item>
          <Typography component="h6" variant="caption" color="primary">
            Monthy Cost
          </Typography>
        </Grid>
      </TableCell>
      <TableCell align="center">
        <Grid>
          <Grid item>
            <Typography component="h5" variant="subtitle1" textAlign="center">
              <strong>{item.internet_speed} Mbps </strong>
            </Typography>
          </Grid>
          <Grid item>
            <Typography component="h6" variant="caption">
              {item.broadband_type} Speed
            </Typography>
          </Grid>
        </Grid>
      </TableCell>
      <TableCell align="center">
        <Grid>
          {" "}
          <Typography component="h5" variant="subtitle1" textAlign="center">
            <strong>£{item.set_up_cost}</strong>
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="h6" variant="caption">
            Setup Costs
          </Typography>
        </Grid>
      </TableCell>
      <TableCell align="center">
        <Grid>
          <Grid item>
            <Typography component="h5" variant="subtitle1" textAlign="center">
              <strong> {item.contract_info}</strong>
            </Typography>
          </Grid>
          <Grid item>
            <Typography component="h6" variant="caption">
              Contract
            </Typography>
          </Grid>
        </Grid>
      </TableCell>
      <TableCell align="center">
        {comparedItems && comparedItems.includes(item) ? (
          <Button
            variant="contained"
            onClick={() => removeFromCompare(item)}
            sx={{ backgroundColor: "red" }}
          >
            Remove
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
