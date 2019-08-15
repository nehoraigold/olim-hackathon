import React from "react";
import { Descriptions, Icon, List } from "antd";

const LicenseTransferSubsection = props => {
	const data = [
		{
			requirement: "You need a valid Teudat Zehut.",
			isComplete: true
		},
		{
			requirement: "You need a valid Teudat Oleh and/or Teudat Zakaut.",
			isComplete: true
		},
		{
			requirement: "You need proof of having driven for 5 consecutive years or more prior to your Aliyah date.",
			isComplete: true
		},
		{
			requirement: "You need to complete a Tofes Yarok.",
			isComplete: false
		}
	];
	return (
		<div className="license-transfer subsection">
			<h3>License Transfer</h3>
			<Descriptions>
				<Descriptions.Item label={"Status"}>Not utilized</Descriptions.Item>
			</Descriptions>
			<List header={<h4>Requirements</h4>}
			      dataSource={data}
			      renderItem={item =>
				      <List.Item>
					      {<Icon type={item.isComplete ? "check" : "close"}/>} {item.requirement}
				      </List.Item>}/>
		</div>
	)
};

export default LicenseTransferSubsection;