import React from "react";
import { Menu, Icon } from "antd";
import "antd/dist/antd.css";

const { SubMenu } = Menu;

class Navbar extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        
      >
        <Menu.Item key="mail" style={{float:'left'}}>
          <Icon type="mail" />
          Logo
        </Menu.Item>

        <Menu.Item key="app">
          <Icon type="appstore" />
          Benefits
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="appstore" />
          Services
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="appstore" />
          My Journey
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="notification" />
          Notifications
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="appstore" />
          Language
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="appstore" />
          Profile
        </Menu.Item>
      </Menu>
    );
  }
}
export default Navbar;
