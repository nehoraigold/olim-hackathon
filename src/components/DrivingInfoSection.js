import React from "react";
import { PageHeader } from "antd";

const DrivingInfoSection = props => {
	const yearsSinceAliyah = 2;
	const eligibiltyStatus = "oleh";

	return (
		<div className="section driving-info-section">
			<PageHeader title={<h3>Driving Information</h3>}/>
			<div>
				<h4 className="driving-title information">Transferring Your Foreign Driver's License</h4>
				<p className="driving-description information">
					You have {5 - yearsSinceAliyah} years to transfer your foreign license into an Israeli one.

				</p>
				<h4 className="driving-title information">Buying or Importing a Car</h4>
				<p className="driving-description information">
					As an {eligibiltyStatus}, you have {`${3 - yearsSinceAliyah} ${3 - yearsSinceAliyah > 1 ? "years" : "year"} `}
					left to take advantage of purchasing a new car in Israel or importing one
					from abroad. Olim receive a ___ tax break...
				</p>
				<p className="driving-description information">Lorem ipsum and shit...</p>
			</div>
		</div>
	)
};

export default DrivingInfoSection;