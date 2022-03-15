import React from "react";
import {Grid, Button} from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import mock from "./mock";
import Widget from "../../../../components/Widget";
import PageTitle from "../../../../components/PageTitle";
import Table from "./components/Table/Table";
export default function Dashboard() {
  let classes = useStyles();

  return (
    <>
      <PageTitle title="Request" button={
        <Button variant="contained" size="medium" color="secondary">
          Latest Reports
        </Button>}
      />
        <Grid item xs={12}>
          <Widget
            title="Certificate of Indigency"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableWidget}
          >
            <Table data={mock.table} />
          </Widget>
        </Grid>
    </>
  );
}

