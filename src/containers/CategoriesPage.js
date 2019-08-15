import React from "react";
import CategoryIcon from "../components/CategoryIcon";
import { Row, Col } from 'antd';


const CategoriesPage = props => {
	return (
		<div>
          <Row>
      <Col span={6} ><CategoryIcon 
                iconName="container"
                title="General"
            />
            <CategoryIcon 
                iconName="credit-card"
                title="Banking"
            /></Col>
      <Col span={6}><CategoryIcon 
                iconName="home"
                title="Housing"
            />
            <CategoryIcon 
                iconName="edit"
                title="Employment"
            /></Col>
      <Col span={6}><CategoryIcon 
                iconName="medicine-box"
                title="Health"
            />
            <CategoryIcon 
                iconName="car"
                title="Driving"
            /></Col>
      <Col span={6}><CategoryIcon 
                iconName="laptop"
                title="Education"
            />
            <CategoryIcon 
                iconName="global"
                title="Ulpan"
            /></Col>
    </Row>
			
		</div>
	)
};

export default CategoriesPage;
