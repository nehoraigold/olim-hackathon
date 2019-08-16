//region imports
import React from "react";
import "./DrivingPage.css"
import BenefitsSection from "../components/BenefitsSection";
import DrivingInfoSection from "../components/DrivingInfoSection";
import BuyingCarSubsection from "../components/BuyingCarSubsection";
import { PageHeader, Tabs } from "antd";
import Icon from "antd/es/icon";
import LicenseTransfer from "../components/LicenseTransferSubsection";
const { TabPane } = Tabs;
//endregion

const DrivingPage = props => {
	return (
		<div className="page driving-page">
			<PageHeader title={<h1>Driving Overview</h1>}/>
			<Tabs defaultActiveKey={"1"}>
				<TabPane key={"1"} tab={<span><Icon type="info-circle"/>Information</span>}>
					<DrivingInfoSection/>
				</TabPane>
				<TabPane key={"2"} tab={<span><Icon type="star"/>My Benefits</span>}>
					<BenefitsSection category="Driving">
						<LicenseTransfer/>
						<BuyingCarSubsection/>
					</BenefitsSection>
				</TabPane>
			</Tabs>
		</div>
	)
};

export default DrivingPage;