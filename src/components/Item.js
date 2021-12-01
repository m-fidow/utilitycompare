import ProviderInfo from "./ProviderInfo";

import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import { Typography } from "@mui/material";

export default function Item({
  addToCompare,
  removeFromCompare,
  comparedItems,
  id,
  name,
}) {
  // const dealDetails = [
  //   { detail: `£ ${item.monthly_price}`, detailDescription: "Monthly Cost" },
  //   {
  //     detail: `${item.internet_speed} Mbps`,
  //     detailDescription: `${item.broadband_type} Speed`,
  //   },
  //   { detail: `£ ${item.set_up_cost}`, detailDescription: "Setup Costs" },
  //   {
  //     detail: `${item.contract_info}`,
  //     detailDescription: "Contract",
  //   },
  // ];
  return (
    <>
      <TableCell align="center">
        {id}
        {name}
      </TableCell>

      {/* <TableCell component="th" scope="row">
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
      {dealDetails.map(({ detail, detailDescription }, index) => {
        return (
          <>
            <TableCell align="center" key={index}>
              <Grid>
                <Grid item>
                  <Typography
                    component="h5"
                    variant="subtitle1"
                    textAlign="center"
                  >
                    <strong>{detail}</strong>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography component="h6" variant="caption">
                    {detailDescription}
                  </Typography>
                </Grid>
              </Grid>
            </TableCell>
          </>
        );
      })}

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
      </TableCell> */}
    </>
  );
}
