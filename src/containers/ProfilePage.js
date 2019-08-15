import React from "react";
import { Descriptions, Input, PageHeader, Select } from "antd";
const { Option } = Select;

const ProfilePage = props => {
	return (
		<div>
			<PageHeader title={<h1>My Profile</h1>}/>
			<Descriptions>
				<Descriptions.Item label="Name"><Input value={`${props.name_first} ${props.name_last}`}/></Descriptions.Item>
				<Descriptions.Item label="ID Number"><Input value={props.identity_number}/></Descriptions.Item>
				<Descriptions.Item label="Marital Status">
					<Select defaultValue={props.marital_status}>
						<Option></Option>
					</Select>
				</Descriptions.Item>
				<Descriptions.Item label="Name"><Input value={"Ezra Erani"}/></Descriptions.Item>
				<Descriptions.Item label="Name"><Input value={"Ezra Erani"}/></Descriptions.Item>
				<Descriptions.Item label="Name"><Input value={"Ezra Erani"}/></Descriptions.Item>
			</Descriptions>
		</div>
	);
};

export default ProfilePage;