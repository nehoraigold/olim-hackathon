import React from "react";
import { Icon } from "antd";
import { Link } from "react-router-dom";

const CategoryBox = props => {
	return (
		<div className="category-icons" style={{ textAlign: 'center' }}>
			<Link to={props.endpoint}>
				<Icon type={props.iconName} style={{ fontSize: '200px' }}/>
			</Link>
			<div>{props.title}</div>
		</div>
	)
};

export default CategoryBox;