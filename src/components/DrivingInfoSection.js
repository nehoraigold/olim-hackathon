import React from "react";
import { PageHeader } from "antd";

const DrivingInfoSection = props => {
	const yearsLeft = 2;
	const eligibiltyStatus = "oleh";

	return (
		<div className="section driving-info-section">
			<PageHeader title={<h3>Driving Information</h3>}/>
			<div>
				<p className="">
					As an {eligibiltyStatus}, you have {yearsLeft} years
					left to take advantage of purchasing a new car in Israel or importing one
					from abroad.
				</p>
			</div>
		</div>
	)
};

export default DrivingInfoSection;