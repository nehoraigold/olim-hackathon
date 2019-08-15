import React from "react";
import { Descriptions, Input, PageHeader, Select } from "antd";
import { connect } from "react-redux";

const { Option } = Select;

const ProfilePage = ({ state }) => {
	return (
		<div>
			<PageHeader title={<h1>My Profile</h1>}/>
			<Descriptions>
				<Descriptions.Item label="Name">
					<Input style={{textTransform: "capitalize"}} value={`${state.name_first} ${state.name_last}`}/>
				</Descriptions.Item>
				<Descriptions.Item label="ID Number">
					<Input value={state.identity_number}/>
				</Descriptions.Item>
				<Descriptions.Item label="Marital Status">
					<Select defaultValue={state.marital_status}>
						<Option value={"single"}>Single</Option>
						<Option value={"married"}>Married</Option>
						<Option value={"divorced"}>Divorced</Option>
					</Select>
				</Descriptions.Item>
				<Descriptions.Item label="Date of Birth">
					<Input value={state.date_of_birth}/>
				</Descriptions.Item>
				<Descriptions.Item label="Date of Aliyah">
					<Input value={state.date_of_arrival}/>
				</Descriptions.Item>
				<Descriptions.Item label="Status">
					<Input style={{textTransform: "capitalize"}} value={state.national_status}/>
				</Descriptions.Item>
			</Descriptions>
		</div>
	);
};

const mapStateToProps = state => {
	return { state }
};

const mapDispatchToProps = dispatch => {
	return {};
};

const Profile = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProfilePage);

export default Profile;