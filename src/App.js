import "./App.css";
import React, { Component } from "react";
import DashboardLayout from "./components/DashboardLayout";
// import AddTodos from "./components/AddTodos";
import { Provider } from "react-redux";
import { store } from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <DashboardLayout />
        </div>
      </Provider>
    );
  }
}

export default App;
