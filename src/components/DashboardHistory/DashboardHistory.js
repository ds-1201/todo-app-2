import React, { Component } from "react";
import CompletedTodos from "../CompletedTodos";

export class DashboardHistory extends Component {
  render() {
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CompletedTodos />
      </div>
    );
  }
}

export default DashboardHistory;
