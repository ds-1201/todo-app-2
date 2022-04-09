import { Button, Checkbox, Divider, Table } from "antd";
import React, { Component } from "react";
import "./App.css";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import PopUp from "./PopUp";
import Column from "antd/lib/table/Column";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      active: "",
    };
  }
  render() {
    return (
      <>
        <PopUp
          handleCancel={() => {
            this.setState((prev) => ({
              modalOpen: !prev.modalOpen,
              active: "",
            }));
          }}
          modalOpen={this.state.modalOpen}
          todo={this.state.active}
          handleOk={this.props.handleEdit}
        />

        <Table
          bordered
          dataSource={this.props.todos}
          scroll={{ x: 700, y: "45vh" }}
          loading={this.props.isLoading}
          pagination={{ pageSize: 5 }}
          rowKey="id"
        >
          <Column
            title="Check"
            key="id"
            width="10%"
            render={(item) => (
              <Checkbox
                defaultChecked={item.completed}
                onChange={(e) => {
                  return this.props.handleComplete({
                    id: item.id,
                    payload: e.target.checked,
                  });
                }}
              ></Checkbox>
            )}
          />
          <Column
            title="Title"
            width="60%"
            key="title"
            render={(item) => (
              <p className={item.completed ? "completed" : ""}>{item.title}</p>
            )}
          />
          <Column
            title="Actions"
            key="id"
            width="20%"
            render={(item) => (
              <>
                <Button
                  type="link"
                  onClick={() => {
                    this.setState((prev) => ({
                      modalOpen: !prev.modalOpen,
                      active: item,
                    }));
                  }}
                >
                  <EditTwoTone />
                </Button>
                <Divider type="vertical" />
                <Button
                  type="link"
                  onClick={() => {
                    this.props.handleDelete(item);
                  }}
                >
                  <DeleteTwoTone twoToneColor="#F4364C" />
                </Button>
              </>
            )}
          />
        </Table>
      </>
    );
  }
}

export default Todo;

{
  /* <List.Item
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
</List.Item>; */
}
