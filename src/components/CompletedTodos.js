import PropTypes from "prop-types";
import React, { Component } from "react";
import "./CompletedTodos.css";
import { connect } from "react-redux";
import uniq from "lodash/uniq";
import { Card, Table } from "antd";

const daysCalculator = (start, stop) => {
  const date1 = new Date(start);
  const date2 = new Date(stop);
  const diffTime = date2 - date1;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

const columns = [
  {
    title: "Todos",
    dataIndex: "title",
    key: "id",
  },
  {
    title: "Start At",
    dataIndex: "createdAt",
    key: "id",
  },
  {
    title: "Complete At",
    dataIndex: "completedAt",
    key: "id",
  },
  {
    title: "Time taken",
    key: "id",
    render: (item) => (
      <p>{daysCalculator(item.createdAt, item.completedAt)} days</p>
    ),
  },
];

const getDates = (list = []) => {
  console.log({ list });
  let a = list.filter((item) => item.completed);
  let data = a.map((item) => item.createdAt);
  data = uniq(data);
  let new_data = data.reduce((a, v) => ({ ...a, [v]: [] }), {});
  a.forEach((item) => {
    const date = item.createdAt;
    new_data[date].push(item);
  });
  delete new_data[""];
  console.log(new_data);
  return new_data;
};

class CompletedTodos extends Component {
  state = {
    dates: {},
  };

  componentDidMount() {
    this.setState({ dates: getDates(this.props.todos) });
  }

  render() {
    return (
      <div className="completed-todos">
        {Object.keys(this.state.dates)
          ?.sort()
          .map((date) => {
            const data = this.state.dates[date];
            return (
              <div
                key={date}
                className="completed__container"
                style={{ height: "100%" }}
              >
                <Table
                  bordered
                  dataSource={data || []}
                  columns={columns}
                  rowKey="id"
                  title={() =>
                    `${date} - Completed: ${this.state?.dates[date]?.length}`
                  }
                />
              </div>
            );
          })}
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
