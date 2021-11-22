import React from "react";
import Grid from "@mui/material/Grid";
function ProviderInfo({
  provider_name,
  provider_logo_image_url,
  deal_name,
  provider_rating,
}) {
  return (
    <Grid container>
      <Grid item>
        <img style={{ width: "70px" }} src={provider_logo_image_url} alt="" />
      </Grid>
      <Grid item>
        {provider_name}
        <p>{deal_name}</p>
        <p>{provider_rating}</p>
      </Grid>
    </Grid>
  );
}

export default ProviderInfo;
