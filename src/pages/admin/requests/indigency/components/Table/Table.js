import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Chip
} from "@material-ui/core";
import useStyles from "../../styles";

const states = {
  done: "success",
  pending: "warning",
  declined: "secondary",
};

const paidState = {
  yes: "success",
  no: "secondary",
};

export default function TableComponent({ data }) {
  const classes = useStyles();
  var keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.shift(); // delete "id" key

  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          {keys.map(key => (
            <TableCell key={key}>{key}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({ id, name, email, date, status, findate, paid, address }) => (
          <TableRow key={id}>
            <TableCell className="pl-3 fw-normal">{name}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{date}</TableCell>
            <TableCell>
              <Chip label={status} classes={{root: classes[states[status.toLowerCase()]]}}/>
            </TableCell>
            <TableCell>
              <Chip label={paid} classes={{root: classes[paidState[paid.toLowerCase()]]}}/>
            </TableCell>
            <TableCell>{address}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
