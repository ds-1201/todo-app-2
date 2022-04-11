import PropTypes from "prop-types";
import React, { Component } from "react";
import "./CompletedTodos.css";
import { connect } from "react-redux";

import { Table } from "antd";

const columns = [
  {
    title: "Todos",
    dataIndex: "title",
    key: "id",
  },
  {
    title: "Start",
    dataIndex: "createdAt",
    key: "id",
  },
  {
    title: "Completed At",
    dataIndex: "completedAt",
    key: "id",
  },
];

class CompletedTodos extends Component {
  render() {
    const data = this?.props?.todos?.filter((todo) => todo.completed);
    return (
      <div className="completed__container">
        <Table bordered dataSource={data || []} columns={columns} rowKey="id" />
      </div>
    );
  }
}

Component.propTypes = {
  todos: PropTypes.array,
};

const mapStateToProps = (state) => ({
  todos: state.todos.items,
});

export default connect(mapStateToProps, {})(CompletedTodos);
