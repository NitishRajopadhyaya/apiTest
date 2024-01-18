import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import * as React from "react";

const apiData = ({ dataslist }) => {
  if (!dataslist) {
    return <div>No data available</div>;
  }
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const tableHeaders = Object.keys(dataslist);
  // console.log(tableHeaders);
  // console.log(Object.values(dataslist));
  let arr = Object.values(dataslist);
  // console.log("arr", arr[0]);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">time</StyledTableCell>
            <StyledTableCell align="center">testItem</StyledTableCell>
            <StyledTableCell align="center">testGroup</StyledTableCell>
            <StyledTableCell align="center">result</StyledTableCell>
            <StyledTableCell align="center">resultvalue</StyledTableCell>
            <StyledTableCell align="center">dateTimeDsiplay</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arr.map((array) =>
            array.map((datas, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                component="th"
                scope="row"
              >
                <StyledTableCell align="center">{datas.date}</StyledTableCell>
                <StyledTableCell align="center">{datas.time}</StyledTableCell>
                <StyledTableCell align="center">
                  {datas.testItem}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {datas.testGroup}
                </StyledTableCell>
                <StyledTableCell align="center">{datas.result}</StyledTableCell>
                <StyledTableCell align="center">
                  {datas.resultValue}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {datas.dateTimeDisplay}
                </StyledTableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default apiData;
