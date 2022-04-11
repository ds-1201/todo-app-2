import React, { Component } from "react";
import "./DashboardLayout.css";
import { Layout } from "antd";
import Sidebar from "./Sidebar/Sidebar";
import DashboardMain from "./DashboardMain/DashboardMain";
import DashboardHistory from "./DashboardHistory/DashboardHistory";
import { connect } from "react-redux";
import { fetchTodos } from "../actions/todoActions";
import PropTypes from "prop-types";

const { Sider, Content } = Layout;

class DashboardLayout extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    return (
      <Layout className="layout">
        <Layout>
          <Sider width={300} className="side-layout">
            <Sidebar />
          </Sider>
          <Content className="main-layout">
            {this.props.page === "0" && <DashboardMain />}
            {this.props.page === "1" && <DashboardHistory />}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

DashboardLayout.propTypes = {
  page: PropTypes.string,
  fetchTodos: PropTypes.func,
};

const mapStateToProps = (state) => ({
  page: state.pages.number,
});

export default connect(mapStateToProps, { fetchTodos })(DashboardLayout);
