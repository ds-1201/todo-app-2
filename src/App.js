import "./App.css";
import React, { Component } from "react";
import { Button, Input, List } from "antd";
import Todo from "./Todo";
import { getTodos } from "./service/Todo";

export class App extends Component {
  state = {
    todos: [],
    modalOpen: false,
    message: "",
    isLoading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const data = await getTodos();
      console.log({ data });
      this.setState({ todos: data.data });
      this.setState({ isLoading: false });
    } catch (err) {
      console.log(err);
      console.log({ error: err.message });
      this.setState({ isLoading: false });
      alert("Error: " + err.message);
    }
  }

  handleSubmit = () => {
    const message = this.state.message;
    const newMessage = {
      id: Math.random().toString(),
      title: message,
      completed: false,
    };
    return this.setState((prev) => ({
      todos: [...prev.todos, newMessage],
      message: "",
    }));
  };

  handleDelete = (item) => {
    console.log(item);
    const newList = this.state.todos?.filter((todo) => todo.id !== item.id);
    return this.setState({ todos: newList });
  };

  handleEdit = (item) => {
    let newList = this.state.todos;
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id === item.id) {
        newList[i].title = item.payload;
        break;
      }
    }
    return this.setState({ todos: newList });
  };

  handleComplete = (item) => {
    let newList = this.state.todos;
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id === item.id) {
        newList[i].completed = item.payload;
        break;
      }
    }
    return this.setState({ todos: newList });
  };

  render() {
    const { todos, isLoading } = this.state;

    return (
      <div className="App">
        <div className="App__container form-box">
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
        <div className="App__container list-box">
          {isLoading && <h1>Loading....</h1>}
          {!isLoading && todos?.length === 0 && <h1>You are all set !!</h1>}
          {!isLoading && todos?.length !== 0 && (
            <List
              bordered
              header={
                <div>
                  <h1>ToDos :</h1>
                </div>
              }
              dataSource={todos}
              renderItem={(todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  handleDelete={this.handleDelete}
                  handleEdit={this.handleEdit}
                  handleComplete={this.handleComplete}
                  handleModal={this.handleModal}
                />
              )}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
