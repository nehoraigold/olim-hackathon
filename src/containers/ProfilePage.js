import React from "react";
import { Descriptions, Input, PageHeader, Select,Checkbox, Radio} from "antd";
import { connect } from "react-redux";

const { Option } = Select;

const ProfilePage = ({ user }) => {


	  

	return (
		<div>
			<PageHeader title={<h1>My Profile</h1>}/>
			<Descriptions>
				<Descriptions.Item label="Name">
					<Input style={{textTransform: "capitalize"}} value={`${user.name_first} ${user.name_last}`}/>
				</Descriptions.Item>
				<Descriptions.Item label="ID Number">
					<Input value={user.identity_number}/>
				</Descriptions.Item>
				<Descriptions.Item label="Marital Status">
					<Select defaultValue={user.marital_status}>
						<Option value={"single"}>Single</Option>
						<Option value={"married"}>Married</Option>
						<Option value={"divorced"}>Divorced</Option>
					</Select>
				</Descriptions.Item>
				<Descriptions.Item label="Date of Birth">
					<Input value={user.date_of_birth}/>
				</Descriptions.Item>
				<Descriptions.Item label="Date of Aliyah">
					<Input value={user.date_of_arrival}/>
				</Descriptions.Item>
				<Descriptions.Item label="Status">
					<Input style={{textTransform: "capitalize"}} value={user.national_status}/>
				</Descriptions.Item>
				<Descriptions.Item label="Valid foreign driver's license for 5+ years?">
					<Checkbox onChange={ onChange=(e)=>e.target.checked}/>
				</Descriptions.Item>
				<Descriptions.Item label="Level of Hebrew">
				<Radio.Group name="radiogroup" defaultValue={1}>
      <Radio value={1}>1</Radio>
      <Radio value={2}>2</Radio>
      <Radio value={3}>3</Radio>
      <Radio value={4}>4</Radio>
    </Radio.Group>
				</Descriptions.Item>
				<Descriptions.Item label="Employed">
					<Checkbox onChange={ onChange=(e)=>e.target.checked}/>
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
		user: state.user }
};

const mapDispatchToProps = dispatch => {
	return {};
};

const Profile = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProfilePage);

export default Profile;