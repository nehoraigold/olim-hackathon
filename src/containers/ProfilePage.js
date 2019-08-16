import React from "react";
import { Avatar, Descriptions, Input, PageHeader, Select, Checkbox, Radio } from "antd";
import { connect } from "react-redux";
import "./Profile.css";
import { validLicenseFor5Years } from "../actions/actions";

const { Option } = Select;

const ProfilePage = ({ user, changeValidDriversLicense }) => {
	return (
		<div className="profile-container">
			<Avatar className="avatar user" size={200} src="/profilepic.jpeg"/>
			<Descriptions className="user-descriptions ">
				<Descriptions.Item className="user-item" label="Name">
					<Input className="user-input" style={{ textTransform: "capitalize" }}
					       value={`${user.name_first} ${user.name_last}`}/>
				</Descriptions.Item>
				<Descriptions.Item className="user-item" label="ID Number">
					<Input className="user-input" value={user.identity_number}/>
				</Descriptions.Item>
				<Descriptions.Item className="user-item" label="Marital Status">
					<Select className="user-input" defaultValue={user.marital_status}>
						<Option value={"single"}>Single</Option>
						<Option value={"married"}>Married</Option>
						<Option value={"divorced"}>Divorced</Option>
					</Select>
				</Descriptions.Item>
				<Descriptions.Item className="user-item" label="Date of Birth">
					<Input value={user.date_of_birth}/>
				</Descriptions.Item>
				<Descriptions.Item className="user-item" label="Date of Aliyah">
					<Input value={user.date_of_arrival}/>
				</Descriptions.Item>
				<Descriptions.Item className="user-item" label="Status">
					<Input style={{ textTransform: "capitalize" }} value={user.national_status}/>
				</Descriptions.Item>
				<Descriptions.Item label="Valid foreign driver's license for 5+ years">
					<Checkbox defaultChecked={user.foreign_drivers_license} onChange={e => changeValidDriversLicense(e.target.checked)}/>
				</Descriptions.Item>
				<Descriptions.Item label="Level of Hebrew">
					<Radio.Group name="radiogroup" defaultValue={2}>
						<Radio value={1}>1</Radio>
						<Radio value={2}>2</Radio>
						<Radio value={3}>3</Radio>
						<Radio value={4}>4</Radio>
					</Radio.Group>
				</Descriptions.Item>
				<Descriptions.Item label="Employed">
					<Checkbox onChange={onChange = (e) => e.target.checked}/>
				</Descriptions.Item>
			</Descriptions>
		</div>
	);
};

function onChange(e) {
	console.log(`checked = ${e.target.checked}`);
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
};

const mapDispatchToProps = dispatch => {
	return {
		changeValidDriversLicense: hasLicense => dispatch(validLicenseFor5Years(hasLicense))
	};
};

const Profile = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProfilePage);

export default Profile;