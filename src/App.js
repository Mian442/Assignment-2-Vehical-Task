import React from "react";
import "./styles.css";
import Vechical from "./component/Vechicaltype";
import { Alert } from "@material-ui/lab";
import { Typography } from "@material-ui/core";

export default function App() {
  return (
    <div>
      <Typography
        variant="h3"
        style={{ width: "100%", marginTop: 20 }}
        align="center"
      >
        Assignment 2
      </Typography>
      <Alert severity="info" style={{ margin: 30 }}>
        Vehicle Type Note: Prepared in React
      </Alert>
      <div className="App" style={{ display: "flex" }}>
        <Vechical title="Estate" />
        <Vechical title="5-6 Passenges" />
        <Vechical title="7 Passenges" />
        <Vechical title="8 Passenges" />
        <Vechical title="8 Passenges" />
        <Vechical title="14 Passenges" />
        <Vechical title="16 Passenges" />
      </div>
    </div>
  );
}
