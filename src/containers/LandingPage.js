import React from "react";
import Navbar from "../components/Navbar"
import CategoryBox from "../components/CategoryBox";
import {Row,Col} from 'antd'
import "./LandingPage.css";

const LandingPage = props => {
	return (
		<div style={{margin: '50px'}}>
            <Row>
                <Col span={24}>
                    <div className="welcome-text">Welcome Back, Ezra!</div>
                </Col>
            </Row>
            <Row>
      <Col span={8} ><CategoryBox
                iconName="star"
                title="My Benefits"
            /></Col>
      <Col span={8}><CategoryBox
                iconName="fork"
                title="My Process"
            />
           </Col>
      <Col span={8}><CategoryBox 
                iconName="file-search"
                title="My Documents"
            />
           </Col>
    </Row>
            <br/>
            <br/>
            <br/>
            <div>Has anything changed? Update your profile to see your current Aliyah journey.</div>
			
		</div>
	)
};

export default LandingPage;
