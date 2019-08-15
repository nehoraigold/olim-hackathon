//region imports
import React from "react";
import "./DrivingPage.css";
import BenefitsSection from "../components/BenefitsSection";
import DrivingInfoSection from "../components/DrivingInfoSection";
import LicenseTransferSubsection from "../components/LicenseTransferSubsection";
import BuyingCarSubsection from "../components/BuyingCarSubsection";
//endregion

const DrivingPage = props => {
	return (
		<div className="page driving-page">
			<DrivingInfoSection/>
			<BenefitsSection>
				<LicenseTransferSubsection/>
				<BuyingCarSubsection/>
			</BenefitsSection>
		</div>
	)
};

export default DrivingPage;