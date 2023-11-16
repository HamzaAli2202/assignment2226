import React from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";

export const ProductItem = ({ item }) => {
  return (
    <Grid align="center" item xs={3}>
      <Card sx={{ bgcolor: "lavender" }}>
        <CardContent>
          <img src={item.image} alt={item.title} />
          <h3>{item.title.slice(0, 25)}</h3>
          <h4>Rs.{item.price}</h4>
          <h5>{item.category}</h5>
          <p>{item.description.slice(0, 50)}</p>
          <Button sx={{ margin: "5px" }} variant="contained" color="warning">
            Add
          </Button>
          <Button variant="contained" color="info">
            Buy
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};
