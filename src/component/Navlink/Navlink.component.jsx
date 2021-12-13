/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const navlinkMap = {
	link: 'Link',
	div: 'div',
};

const Navlink = ({ img, name, variant, to, color }) => {
	const Type = navlinkMap[variant] || navlinkMap.link;

	return (
		<Type to={to} className='d-flex align-item-center' color={color}>
			<img src={img} alt={`${name}-img`} className='p-1' />
			<h6>{name}</h6>
		</Type>
	);
};

export default Navlink;
