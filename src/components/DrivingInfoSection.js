import React from "react";
import { PageHeader } from "antd";
import { connect } from "react-redux";

const DrivingInfoSection = ({ user, benefit }) => {
	const startsWithVowel = text => {
		return text.charAt(0);
	};

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
			</div>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		user: state.user,
		benefit: {}
	}
};

const mapDispatchToProps = dispatch => {
	return {};
};

const DrivingInfo = connect(
	mapStateToProps,
	mapDispatchToProps
)(DrivingInfoSection);

export default DrivingInfo;