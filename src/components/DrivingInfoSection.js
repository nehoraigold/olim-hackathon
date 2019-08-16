import React from "react";
import { PageHeader } from "antd";
import { connect } from "react-redux";

const DrivingInfoSection = ({ user, benefit }) => {
	const startsWithVowel = text => {
		return ['a', 'e', 'i', 'o', 'u'].some(letter => letter === text.charAt(0).toLowerCase());
	};

	const returnWordWithArticle = text => {
		return startsWithVowel(text) ? `an ${text}` : `a ${text}`;
	};

	const yearsSinceAliyah = 2;
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
					As {returnWordWithArticle(user.national_status)}, you have {``}
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