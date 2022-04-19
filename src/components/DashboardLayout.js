import React, { Component } from "react";
import "./DashboardLayout.css";
import { Layout } from "antd";
import Sidebar from "./Sidebar/Sidebar";
import DashboardMain from "./DashboardMain/DashboardMain";
import DashboardHistory from "./DashboardHistory/DashboardHistory";
import { connect } from "react-redux";
import actions from "./../actions/todoActions";
import PropTypes from "prop-types";
import { getTodos } from "../service/Todo";
import { transformTodos } from "../helper/todoHelper";

const { Sider, Content } = Layout;

class DashboardLayout extends Component {
  async componentDidMount() {
    try {
      this.props.loading();
      const result = await getTodos();
      const new_data = transformTodos(result.data);
      this.props.fetchTodos(new_data);
      this.props.loading();
    } catch (err) {
      console.log(err.message);
      alert(err.message);
      this.props.loading();
    }
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

const mapDispatchToProps = (dispatch) => ({
  loading: () => dispatch(actions.isLoading()),
  fetchTodos: (payload) => dispatch(actions.fetchTodos(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout);
