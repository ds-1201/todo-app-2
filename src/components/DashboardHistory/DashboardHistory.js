import React, { Component } from "react";
import CompletedTodos from "../CompletedTodos";

export class DashboardHistory extends Component {
  render() {
    return (
      <div>
        <CompletedTodos />
      </div>
    );
  }
}

export default DashboardHistory;
