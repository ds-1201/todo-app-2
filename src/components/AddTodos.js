import React, { Component } from "react";
import "./AddTodos.css";
import { Button, Input } from "antd";
import Todo from "./Todo";
import { connect } from "react-redux";
import actions from "./../actions/todoActions";
import todoHelper from "./../helper/todoHelper";
import PropTypes from "prop-types";

class AddTodos extends Component {
  state = {
    modalOpen: false,
    message: "",
  };

  handleSubmit = () => {
    const new_data = todoHelper.createTodo(this.state.message);
    this.props.createTodo(new_data);
    return this.setState({ message: "" });
  };

  // handleEdit = (item) => {
  //   let newList = this.state.todos;
  //   for (let i = 0; i < newList.length; i++) {
  //     if (newList[i].id === item.id) {
  //       newList[i].title = item.payload;
  //       break;
  //     }
  //   }
  //   return this.setState({ todos: newList });
  // };

  // handleComplete = (item) => {
  //   let newList = this.state.todos;
  //   for (let i = 0; i < newList.length; i++) {
  //     if (newList[i].id === item.id) {
  //       newList[i].completed = item.payload;
  //       break;
  //     }
  //   }
  //   return this.setState({ todos: newList });
  // };

  render() {
    const { todos, isLoading } = this.props;

    return (
      <div className="Add-todo">
        <div className="Add-todo__container form-box">
          <Input
            size="large"
            placeholder="Add TODO"
            value={this.state.message}
            onChange={(e) => this.setState({ message: e.target.value })}
          />

          <Button size="large" type="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </div>
        <div className="Add-todo__container list-box">
          {!isLoading && todos?.length === 0 && <h1>You are all set !!</h1>}
          {<Todo />}
        </div>
      </div>
    );
  }
}

AddTodos.propTypes = {
  createTodo: PropTypes.func,
  todos: PropTypes.array,
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  todos: state.todos.items,
  isLoading: state.todos.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  createTodo: (payload) => dispatch(actions.createTodo(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodos);
