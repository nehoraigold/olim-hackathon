import React from "react";
import { Descriptions, List, Icon } from "antd";

const BuyingCarSubsection = props => {
	let data = [
		{
			isComplete: false,
			requirement: "You do not have a valid Israeli driver's license"
		},
		{
			isComplete: true,
			requirement: "You have a valid foreign license that was issued at least 3 months before your Aliyah date."
		}

	];
	return (
		<div className="buying-car subsection">
			<h3 className="driving-title information">Buying or Importing a Car</h3>
			<br/>
			<Descriptions>
				<Descriptions.Item className="driving-label information" label={"Status"}>
					<div className="not-utilized">Not utilized </div>
				</Descriptions.Item>
			</Descriptions>
			<List header={<h4 >Requirements</h4>}
				dataSource={data}
			    renderItem={item =>
					<List.Item>
						{<Icon className={item.isComplete ? "utilized" : "not-utilized"}
							type={item.isComplete ? "check" : "close"}/>} {item.requirement}
					</List.Item>}/>
		</div>
	);
};

export default BuyingCarSubsection;