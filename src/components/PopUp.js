import { Input, Modal } from "antd";
import React, { Component } from "react";

export class PopUp extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.todo !== "" && prevProps.todo !== this.props.todo) {
      this.setState({ input: this.props.todo.title });
    }
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  okHandler = () => {
    const new_item = { ...this.props.todo, title: this.state.input };
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
      </Modal>
    );
  }
}

export default PopUp;
