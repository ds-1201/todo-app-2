import { HistoryOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React, { Component } from "react";
import "./Sidebar.css";
import { connect } from "react-redux";
import { changePage } from "../../actions/pageActions";

export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-logo"></div>
        <Menu
          mode="inline"
          defaultSelectedKeys={[this.props.page]}
          onClick={(item) => {
            this.props.changePage(item.key);
          }}
        >
          <Menu.Item key={0} icon={<UserOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key={1} icon={<HistoryOutlined />}>
            History
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.pages.number,
});

export default connect(mapStateToProps, { changePage })(Sidebar);
