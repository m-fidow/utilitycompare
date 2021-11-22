import React from "react";
import Grid from "@mui/material/Grid";
import Rating from "react-rating";
import { Box } from "@mui/system";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa/";

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
        <Box>
          <Rating initialRating={provider_rating * 5} readonly />
        </Box>

        {/* <Rating
          emptySymbol="fa fa-star-o"
          fullSymbol="fa fa-star"
          fractions={2}
        /> */}
      </Grid>
    </Grid>
  );
}

export default ProviderInfo;
