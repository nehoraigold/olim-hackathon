import React from "react";
import { PageHeader } from "antd";

const BenefitsSection = props => {
	return (
		<div className="section benefits-section">
			<PageHeader title={<h3>My {props.category} Benefits</h3>}/>
			<div>
				{props.children}
			</div>
		</div>
	)
};

export default BenefitsSection;