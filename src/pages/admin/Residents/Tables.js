import React from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../../components/PageTitle";


const columns = [
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "email",
    label: "Email",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "age",
    label: "Age",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "contactNumber",
    label: "Contact Number",
    options: {
      filter: true,
      sort: true,
    },
  },
];

const data = [
  ["Joe James",  "Example Inc.", "21", "09222222891"],
  ["John Walsh",  "Example Inc.", "22", "09222222891"],
  ["Bob Herm",  "Example Inc.", "29", "09222222891"],
  ["James Houston",  "Example Inc.", "25", "09222222891"],
  ["Prabhakar Linwood",  "Example Inc.", "27", "09222222891"],
  ["Kaui Ignace",  "Example Inc.", "35", "09222222891"],
  ["Esperanza Susanne",  "Example Inc.", "27", "09222222891"],
  ["Christian Birgitte",  "Example Inc.", "29", "09222222891"],
  ["Meral Elias",  "Example Inc.", "27", "09222222891"],
  ["Deep Pau",  "Example Inc.", "35", "09222222891"],
  ["Sebastiana Hani",  "Example Inc.", "25", "09222222891"],
  ["Marciano Oihana",  "Example Inc.", "35", "09222222891"],
  ["Brigid Ankur",  "Example Inc.", "25", "09222222891"],
  ["Anna Siranush",  "Example Inc.", "35", "09222222891"],
  ["Avram Sylva",  "Example Inc.", "27", "09222222891"],
  ["Serafima Babatunde",  "Example Inc.", "29", "09222222891"],
  ["Gaston Festus",  "Example Inc.", "29", "09222222891"],
];

const options = {
  filterType: 'checkbox',
};

export default function Tables() {
  return (
    <>
      <PageTitle title="Barangay Residents" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable title="Resident List" data={data} columns={columns} options={options}/>
        </Grid>
      </Grid>
    </>
  );
}
