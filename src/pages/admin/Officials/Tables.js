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
    name: "role",
    label: "Role",
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
  ["Joe James", "Chairman", "Example Inc.", "40", "09222222891"],
  ["John Walsh", "SK Chairman", "Example Inc.", "31", "09222222891"],
  ["Bob Herm", "Secretary", "Example Inc.", "29", "09222222891"],
  ["James Houston", "Treasurer", "Example Inc.", "26", "09222222891"],
  ["Prabhakar Linwood", "Book Keeper", "Example Inc.", "31", "09222222891"],
  ["Kaui Ignace", "SK Kagawad", "Example Inc.", "40", "09222222891"],
  ["Esperanza Susanne", "Kagawad", "Example Inc.", "31", "09222222891"],
  ["Christian Birgitte", "Kagawad", "Example Inc.", "29", "09222222891"],
  ["Meral Elias", "Kagawad", "Example Inc.", "31", "09222222891"],
  ["Deep Pau", "Kagawad", "Example Inc.", "40", "09222222891"],
  ["Sebastiana Hani", "Kagawad", "Example Inc.", "26", "09222222891"],
  ["Marciano Oihana", "Kagawad", "Example Inc.", "40", "09222222891"],
  ["Brigid Ankur", "Kagawad", "Example Inc.", "26", "09222222891"],
  ["Anna Siranush", "Kagawad", "Example Inc.", "40", "09222222891"],
  ["Avram Sylva", "Kagawad", "Example Inc.", "31", "09222222891"],
  ["Serafima Babatunde", "Kagawad", "Example Inc.", "29", "09222222891"],
  ["Gaston Festus", "Kagawad", "Example Inc.", "29", "09222222891"],
];

const options = {
  filterType: 'checkbox',
};
export default function Tables() {
  return (
    <>
      <PageTitle title="Barangay Officials" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable title="Official List" data={data} columns={columns} options={options}/>
        </Grid>
      </Grid>
    </>
  );
}
