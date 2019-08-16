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
					{benefits.some(benefit => benefit.id === "ulpan_hebrew_lessons") ?
							<CategoryBox iconName="global" title="Ulpan"/> : null}
				</Col>
			</Row>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		benefits: state.benefits
	};
};

const mapDispatchToProps = dispatch => {
	return {};
};

const CategoriesComponent = connect(
	mapStateToProps,
	mapDispatchToProps
)(Categories);

export default CategoriesComponent;