import React from "react";
import "./components/common.css";
import { Landing2 } from "./comp26/Landing2";
import { Card, CardContent } from "@mui/material";

function App() {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Landing2 />
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default App;
