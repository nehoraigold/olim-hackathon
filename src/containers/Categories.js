import React from "react";
import CategoryBox from "../components/CategoryBox";
import { Row, Col } from 'antd';
import { connect } from "react-redux";


const Categories = ({ benefits }) => {
	return (
		<div>
			<Row>
				<Col span={6}>
					<CategoryBox iconName="container" title="General"/>
					<CategoryBox iconName="credit-card" title="Banking"/>
				</Col>
				<Col span={6}>
					<CategoryBox iconName="home" title="Housing"/>
					<CategoryBox iconName="edit" title="Employment"/>
				</Col>
				<Col span={6}>
					<CategoryBox iconName="medicine-box" title="Health"/>
					<CategoryBox iconName="car" title="Driving" endpoint="/category/driving"/>
				</Col>
				<Col span={6}>
					<CategoryBox iconName="laptop" title="Education"/>

					<CategoryBox iconName="global" title="Ulpan"/>
				</Col>
			</Row>
		</div>
	)
};



const CategoriesComponent = connect(

);

export default Categories;