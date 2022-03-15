import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../admin/Header";
import Sidebar from "../admin/Sidebar";

// pages
import Dashboard from "../../pages/admin/dashboard/Dashboard";
import Residents from "../../pages/admin/Residents/Tables";
import Officials from "../../pages/admin/Officials/Tables";
import Clearance from "../../pages/admin/requests/clearance/index";
import BusinessPermit from "../../pages/admin/requests/business-permit/index";
import Cedula from "../../pages/admin/requests/cedula/index";
import Indigency from "../../pages/admin/requests/indigency/index";
import Residency from "../../pages/admin/requests/residency/index";
import RequestDashboard from "../../pages/admin/requests/dashboard/Dashboard";

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  let classes = useStyles();

  // global
  let layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/admin/dashboard" component={Dashboard} />
              <Route path="/app/admin/residents" component={Residents} />
              <Route path="/app/admin/officials" component={Officials} />
              <Route
                exact
                path="/app/admin/requests"
                render={() => <Redirect to="/app/admin/requests/dashboard" component={RequestDashboard}/>}
              />
              <Route path="/app/admin/requests/clearance" component={Clearance} />
              <Route path="/app/admin/requests/residency" component={Residency} />
              <Route path="/app/admin/requests/indigency" component={Indigency} />
              <Route path="/app/admin/requests/cedula" component={Cedula} />
              <Route path="/app/admin/requests/business-permit" component={BusinessPermit} />
            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
