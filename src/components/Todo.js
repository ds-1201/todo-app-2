import { Button, Checkbox, Divider, message, Popconfirm, Table } from "antd";
import React, { Component } from "react";
import "./Todo.css";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import PopUp from "./PopUp";
import Column from "antd/lib/table/Column";
import { connect } from "react-redux";
import {
  createTodo,
  editTodo,
  deleteTodo,
  completeTodo,
} from "./../actions/todoActions";
import PropTypes from "prop-types";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      active: "",
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.todos !== this.props.todos) {
      let date = this.props.todos?.map((item) => item.createdAt);
      console.log(date);
    }
  }

  render() {
    const todos = this.props.todos.filter((todo) => {
      return !todo.completed;
    });

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
          handleOk={this.props.editTodo}
        />

        <Table
          bordered
          dataSource={todos}
          scroll={{ x: 700, y: "45vh" }}
          loading={this.props.isLoading}
          pagination={{ pageSize: 5 }}
          rowKey="id"
          title={() => <h1>Todos:</h1>}
        >
          {/* <Column
            title="Check"
            key="id"
            width="10%"
            render={(item) => (
              <div
                onClick={(e) => {
                  const data = {
                    id: item.id,
                  };
                  message.success("Task Successfully Completed");
                  return this.props.completeTodo(data);
                }}
              >
                <Checkbox checked={item.completed}></Checkbox>
              </div>
            )}
          /> */}
          <Column
            title="Title"
            key="title"
            width="50%"
            render={(item) => <p>{item.title}</p>}
          />
          <Column
            title="Start At"
            key="id"
            render={(item) => <p>{item.createdAt}</p>}
          />
          <Column
            title="Actions"
            key="id"
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
                <Popconfirm
                  title="Are you sure？"
                  okText="Yes"
                  cancelText="No"
                  placement="right"
                  onConfirm={() => {
                    this.props.completeTodo(item);
                    message.success("Task Successfully completed !!");
                  }}
                >
                  <Button
                    type="link"
                    // onClick={() => {
                    //   this.props.deleteTodo(item);
                    // }}
                  >
                    <DeleteTwoTone twoToneColor="#F4364C" />
                  </Button>
                </Popconfirm>
              </>
            )}
          />
        </Table>
      </>
    );
  }
}

Todo.propTypes = {
  createTodo: PropTypes.func,
  todos: PropTypes.array,
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  todos: state.todos.items,
  isLoading: state.todos.isLoading,
});

export default connect(mapStateToProps, {
  createTodo,
  editTodo,
  deleteTodo,
  completeTodo,
})(Todo);
