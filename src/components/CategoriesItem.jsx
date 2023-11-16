import React from "react";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const CategoriesItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Link to="/product">
        <Button variant="contained" fullWidth color="success">
          {item}
        </Button>
      </Link>
    </Grid>
  );
};
