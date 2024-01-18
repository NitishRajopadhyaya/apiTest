import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useState } from "react";

const PostData = () => {
  const [patientId, setPatientId] = useState("");
  const [testItem, setTestItem] = useState("");
  const [testGroup, setTestGroup] = useState("");
  const [result, setResult] = useState("");
  const [visitId, setVisitId] = useState("");

  const handleSubmit = (e) => {
    let datetime = new Date();
    const date = [
      datetime.getFullYear(),
      datetime.getMonth() + 1,
      datetime.getDate(),
    ];
    const time = [datetime.getHours(), datetime.getMinutes()];

    e.preventDefault();
    const data = {
      patientId,
      testItem,
      testGroup,
      result,
      visitId,
      date,
      time,
    };
    console.log(data);

    fetch("https://api.metta.one/v1/ehr/investigation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "API-Key": "111588491112680278288",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
      console.log("Data Added");
      window.location.reload();
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              required
              id="outlined-required"
              label="PatientId"
              type="text"
              onChange={(e) => setPatientId(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              id="outlined-required"
              label="testItem"
              type="text"
              onChange={(e) => setTestItem(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              id="outlined-required"
              label="testGroup"
              type="text"
              onChange={(e) => setTestGroup(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              id="outlined-required"
              label="result"
              type="text"
              onChange={(e) => setResult(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              id="outlined-required"
              label="visitId"
              type="text"
              onChange={(e) => setVisitId(e.target.value)}
            />
          </Grid>
        </Grid>
      </Box>
      <button>Add Data</button>
    </form>
  );
};

export default PostData;
