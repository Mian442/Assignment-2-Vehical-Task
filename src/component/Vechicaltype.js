import React, { useState } from "react";
import { Checkbox, TextField, Typography } from "@material-ui/core";

export default ({ title }) => {
  const [checked, setChecked] = useState(true);
  const [disable, setDisable] = useState(false);
  const [in1, setIn1] = useState("");
  const [in2, setIn2] = useState("");
  console.log(in1);

  const handleCheckedChange = () => {
    setChecked(!checked);
    setDisable(!disable);
  };

  const handleflatchange = e => {
    if (
      (e.target.value[e.target.value.length - 1] >= "0" &&
        e.target.value[e.target.value.length - 1] <= "9") ||
      e.target.value[e.target.value.length - 1] === undefined
    ) {
      setIn2(e.target.value);
    }
  };

  const handleperchange = e => {
    if (
      (e.target.value[e.target.value.length - 1] >= "0" &&
        e.target.value[e.target.value.length - 1] <= "9" &&
        Number(e.target.value) <= 100) ||
      e.target.value[e.target.value.length - 1] === undefined
    ) {
      setIn1(e.target.value);
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#E0E0E0",
          height: 50,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Typography variant="" style={{ alignSelf: "center" }}>
          {title}
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 10
        }}
      >
        <Checkbox
          checked={checked}
          onChange={handleCheckedChange}
          name="checkedB"
          color="primary"
        />
        <TextField
          disabled={disable}
          onChange={handleperchange}
          variant="outlined"
          size="small"
          value={in1}
        />
        <Typography style={{ alignSelf: "center", paddingLeft: 3 }}>
          %
        </Typography>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 10
        }}
      >
        <Checkbox
          checked={!checked}
          onChange={handleCheckedChange}
          name="checkedB"
          color="primary"
        />
        <TextField
          disabled={!disable}
          onChange={handleflatchange}
          variant="outlined"
          size="small"
          value={in2}
        />
        <Typography style={{ alignSelf: "center", paddingLeft: 3 }}>
          £
        </Typography>
      </div>
    </div>
  );
};
