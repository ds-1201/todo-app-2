import React, { Component } from "react";
import "./DashboardMain.css";
import AddTodos from "./../AddTodos";

export class DashboardMain extends Component {
  render() {
    return (
      <div className="Dashboard-main">
        <AddTodos />
      </div>
    );
  }
}

export default DashboardMain;
