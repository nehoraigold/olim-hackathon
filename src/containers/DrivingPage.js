//region imports
import React from "react";
import "./DrivingPage.css";
import BenefitsSection from "../components/BenefitsSection";
import DrivingInfoSection from "../components/DrivingInfoSection";
import LicenseTransferSubsection from "../components/LicenseTransferSubsection";
import BuyingCarSubsection from "../components/BuyingCarSubsection";
import { PageHeader, Tabs } from "antd";
import Icon from "antd/es/icon";
import Navbar from "../components/Navbar";

const { TabPane } = Tabs;
//endregion

const DrivingPage = props => {
	return (
		<div className="page driving-page">
			<PageHeader title={<h1>Driving Overview</h1>}/>
			<Tabs defaultActiveKey={"1"}>
				<TabPane key={"1"} tab={<span><Icon type="car"/>Information</span>}>
					<DrivingInfoSection/>
				</TabPane>
				<TabPane key={"2"} tab={<span><Icon type="car"/>My Benefits</span>}>
					<BenefitsSection category="Driving">
						<LicenseTransferSubsection/>
						<BuyingCarSubsection/>
					</BenefitsSection>
				</TabPane>
			</Tabs>
		</div>
	)
};

export default DrivingPage;