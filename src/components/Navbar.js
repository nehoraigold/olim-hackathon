import React from "react";
import { Menu, Icon } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

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
			<Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
				<Menu.Item class="menu-item logo" key="mail" style={{ float: 'left' }}>
					<Link to={"/"}>
						<div class="logo app-title" style={{ fontFamily: 'Courgette, cursive', fontSize: '20px' }}>
							hamerkazia
						</div>
					</Link>
				</Menu.Item>

				<Menu.Item key="benefits">
					<Icon type="star"/>
					Benefits
				</Menu.Item>
				<Menu.Item key="services">
					<Link to={"/categories"}>
						<Icon type="appstore"/>
						Services
					</Link>
				</Menu.Item>
				<Menu.Item key="journey">
					<Icon type="global"/>
					My Journey
				</Menu.Item>
				<Menu.Item key="notification">
					<Icon type="notification"/>
				</Menu.Item>
				<Menu.Item key="lang">
					EN
				</Menu.Item>
				<Menu.Item key="user-profile">
					<Link to={"/profile"}>
						<Icon type="user"/>
					</Link>
				</Menu.Item>

			</Menu>
		);
	}
}

export default Navbar;