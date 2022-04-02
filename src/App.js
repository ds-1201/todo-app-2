import "./App.css";
import React, { Component } from "react";
import { Button, Input, List } from "antd";
import Todo from "./Todo";

const DUMMY = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: true,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
];

export class App extends Component {
  state = {
    todos: [],
    modalOpen: false,
    message: "",
  };

  componentDidMount() {
    this.setState({ todos: DUMMY });
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
    const { todos } = this.state;

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
          {todos?.length === 0 && <h1>You are all set !!</h1>}
          {todos?.length !== 0 && (
            <List
              bordered
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
