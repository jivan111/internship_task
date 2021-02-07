import Grid from "@material-ui/core/Grid";
import React from "react";
function Grids() {
  return (
    <div
      style={{
        maxWidth: "80%",
        margin:"auto"
      }}
    >
      <Grid
   
        // direction="row"
        // justify="flex-start"
        // alignItems="flex-start"
      >
        <Grid item xs={12} sm={6} md={4}>
          kjndj
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          hello
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          hello
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          hello
        </Grid>
      </Grid>
    </div>
  );
}

export default Grids;
