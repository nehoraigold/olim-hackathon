
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
          <Menu.Item class="menu-item logo" key="mail" style={{float:'left'}}>
            <div class="logo app-title" style={{fontFamily: 'Courgette, cursive', fontSize:'20px'}}>
              hamerkazia
            </div>
          </Menu.Item>

          <Menu.Item key="benefits">
            <Icon type="star" />
            Benefits
          </Menu.Item>
          <Menu.Item key="services">
            <Icon type="appstore" />
            Services
          </Menu.Item>
          <Menu.Item key="journey">
            <Icon type="global" />
            My Journey
          </Menu.Item>
          <Menu.Item key="notification">
            <Icon type="notification" />
          </Menu.Item>
          <Menu.Item key="lang">
            EN
          </Menu.Item>
          <Menu.Item key="user-profile">
            <Icon type="user" />
          </Menu.Item>
        </Menu>
    );
  }
}
export default Navbar;