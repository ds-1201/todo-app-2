import { DatePicker, Input, Modal } from "antd";
import React, { Component } from "react";
import moment from "moment";

export class PopUp extends Component {
  state = {
    input: "",
    date: "",
  };

  componentDidUpdate(prevProps) {
    if (prevProps.todo !== this.props.todo) {
      this.setState({
        input: this.props.todo.title,
        date: this.props.todo.createdAt,
      });
    }
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleDateChange = (date, dateString) => {
    this.setState({ date: dateString });
    // console.log(date, dateString);
  };

  okHandler = () => {
    const new_item = {
      ...this.props.todo,
      title: this.state.input,
      createdAt: this.state.date,
    };
    this.props.handleOk(new_item);
    this.props.handleCancel();
  };

  render() {
    return (
      <Modal
        title="ToDo Modal"
        visible={this.props.modalOpen}
        onOk={this.okHandler}
        onCancel={this.props.handleCancel}
      >
        <Input value={this.state.input} onChange={this.handleInputChange} />

        <DatePicker
          value={moment(this.state.date || "01/01/2022", "MM/DD/YYYY")}
          onChange={this.handleDateChange}
          style={{ width: "100%", marginTop: "1rem" }}
          format={"MM/DD/YYYY"}
        />
      </Modal>
    );
  }
}

export default PopUp;
