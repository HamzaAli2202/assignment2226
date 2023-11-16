import React, { useState, useEffect } from "react";
import { NavData } from "./NavData";
import { Grid, Card, CardContent } from "@mui/material";
import { NavigationItem } from "./NavigationItem";

export const Navigation = () => {
  const [data, setData] = useState(NavData);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          {data.map((item) => (
            <NavigationItem item={item} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
