import { Button, Checkbox, List } from "antd";
import React, { Component } from "react";
import "./App.css";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import PopUp from "./PopUp";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
    };
  }

  deleteHandler = () => {
    return this.props.handleDelete(this.props.todo);
  };

  completeHandler = (e) => {
    return this.props.handleComplete({
      id: this.props.todo.id,
      payload: e.target.checked,
    });
  };

  handleModal = () => {
    return this.setState((prev) => ({ modalOpen: !prev.modalOpen }));
  };

  render() {
    return (
      <>
        <PopUp
          handleCancel={this.handleModal}
          modalOpen={this.state.modalOpen}
          todo={this.props.todo}
          handleOk={this.props.handleEdit}
        />

        <List.Item
          actions={[
            <Button type="link" onClick={this.handleModal}>
              <EditTwoTone />
            </Button>,
            <Button type="link" onClick={this.deleteHandler}>
              <DeleteTwoTone twoToneColor="#F4364C" />
            </Button>,
          ]}
        >
          <div style={{ marginRight: "0.5rem" }}>
            <Checkbox
              defaultChecked={this.props.todo.completed}
              onChange={this.completeHandler}
            ></Checkbox>
          </div>
          <List.Item.Meta
            title={this.props.todo.title}
            className={this.props.todo.completed ? "completed" : ""}
          />
        </List.Item>
      </>
    );
  }
}

export default Todo;
