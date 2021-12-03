import ProviderInfo from "./ProviderInfo";

import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function Item({
  addToCompare,
  removeFromCompare,
  comparedItems,
  item,
}) {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#1976d2",
    },
  });
  const dealDetails = [
    { detail: `£ ${item.monthly_price}`, detailDescription: "Monthly Cost" },
    {
      detail: `${item.internet_speed} Mbps`,
      detailDescription: `${item.broadband_type} Speed`,
    },
    { detail: `£ ${item.set_up_cost}`, detailDescription: "Setup Costs" },
    {
      detail: `${item.contract_info}`,
      detailDescription: "Contract",
    },
  ];
  return (
    <>
      <TableCell component="th" scope="row" sx={{ padding: "16px 16px" }}>
        <ProviderInfo
          {...item}
          rating={
            <StyledRating
              name="half-rating-read"
              defaultValue={item.provider_rating * 5 ?? " "}
              precision={0.1}
              size="small"
              sx={{ "& .MuiRating-iconFilled": { backgroundColor: "primary" } }}
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
            sx={{
              backgroundColor: "red",
              paddingLeft: " 48px",
              paddingRight: " 48px",
              borderRadius: "50px",
              textTransform: "capitalize",
              ":hover": { backgroundColor: "#b70707" },
            }}
          >
            Remove
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{
              borderRadius: "50px",
              backgroundColor: "white",
              border: "2px solid #1976d2 ",
              color: "#000",
              textTransform: "capitalize",
            }}
            onClick={() => addToCompare(item)}
          >
            Add To Compare
          </Button>
        )}
      </TableCell>
    </>
  );
}
// sx={{
//   ':hover': {
//     bgcolor: 'primary.main', // theme.palette.primary.main
//     color: 'white',
//   },
