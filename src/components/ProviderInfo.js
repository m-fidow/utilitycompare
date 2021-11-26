import React from "react";
import Grid from "@mui/material/Grid";
// import Rating from "react-rating";
import { Box } from "@mui/system";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function ProviderInfo({
  provider_name,
  provider_logo_image_url,
  deal_name,
  provider_rating,
  rating,
}) {
  return (
    <Grid container>
      <Grid item>
        <img style={{ width: "70px" }} src={provider_logo_image_url} alt="" />
      </Grid>
      <Grid item>
        {provider_name}
        <p>{deal_name}</p>
        {provider_rating}
        <Stack spacing={1}>{rating}</Stack>
      </Grid>
    </Grid>
  );
}

export default ProviderInfo;
