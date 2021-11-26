import React from "react";
import Grid from "@mui/material/Grid";
// import Rating from "react-rating";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
function ProviderInfo({
  provider_name,
  provider_logo_image_url,
  deal_name,
  provider_rating,
  rating,
}) {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <img style={{ width: "70px" }} src={provider_logo_image_url} alt="" />
      </Grid>
      <Grid item>
        <Typography component="h1" variant="h6">
          {provider_name}
        </Typography>
        <Typography component="h2" variant="caption">
          {deal_name}
        </Typography>
        <Stack spacing={1}>{rating}</Stack>
      </Grid>
    </Grid>
  );
}

export default ProviderInfo;
