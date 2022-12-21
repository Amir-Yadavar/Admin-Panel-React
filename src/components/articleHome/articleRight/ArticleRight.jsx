import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { transaction } from "../../../dataChart";
import "./ArticleRight.css";
import { Alert } from "@mui/material";

export default function ArticleRight() {
  return (
    <section className="container-table">
      <TableContainer component={Paper}>
        <span>Last Transaction</span>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="justify">Customer</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {transaction.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={row.img} alt="" className="article-right-img" />
                  {row.customer}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">$ 130</TableCell>
                <TableCell align="right">
                  {row.status === "Declined" ? (
                    <Alert severity="warning">{row.status}</Alert>
                  ) : row.status === "Pending" ? (
                    <Alert severity="info">{row.status}</Alert>
                  ) : (
                    <Alert severity="success">{row.status}</Alert>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}
