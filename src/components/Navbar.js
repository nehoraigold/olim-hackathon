import React from "react";
import { Menu, Icon } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const { SubMenu } = Menu;

const NavbarComponent = ({ benefits }) => {
	return (
		<Menu selectedKeys={["mail"]} mode="horizontal">
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
			<Menu.SubMenu key="services" title={
				<Link to={"/categories"}>
					<Icon type="appstore"/>
					Services
				</Link>}>
				<Menu.Item key={"General"}>General</Menu.Item>
				<Menu.Item key={"Banking"}>Banking</Menu.Item>
				<Menu.Item key={"Housing"}>Housing</Menu.Item>
				<Menu.Item key={"Employment"}>Employment</Menu.Item>
				<Menu.Item key={"Health"}>Health</Menu.Item>
				<Menu.Item key={"Driving"}>
					<Link to={"/category/driving"}>Driving</Link>
				</Menu.Item>
				<Menu.Item key={"Education"}>Education</Menu.Item>
				{benefits.some(benefit => benefit.id === "ulpan_hebrew_lessons") ?
					<Menu.Item key={"Ulpan"}>Ulpan</Menu.Item> : null}
			</Menu.SubMenu>
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
};

const mapStateToProps = state => {
	return {
		benefits: state.benefits
	};
};

const mapDispatchToProps = dispatch => {
	return {};
};

const Navbar = connect(
	mapStateToProps,
	mapDispatchToProps
)(NavbarComponent);

export default Navbar;