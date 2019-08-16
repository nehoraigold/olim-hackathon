import React from "react";
import { Icon } from "antd";


const CategoryBox = props => {
	return (
		<div className="category-icons" style={{ textAlign: 'center' }}>
			<Icon type={props.iconName} style={{ fontSize: '200px' }}/>
			<div>{props.title}</div>
		</div>
	)
};

export default CategoryBox;