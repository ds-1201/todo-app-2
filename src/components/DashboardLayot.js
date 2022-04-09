import React, { Component } from "react";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

class DashboardLayot extends Component {
  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default DashboardLayot;
