/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

const navlinkMap = {
	link: NavLink,
	div: 'div',
};

const Navlink = ({ img, name, variant, to, color }) => {
	const Type = navlinkMap[variant] || navlinkMap.link;

	return (
		<Type
			style={({ isActive }) => {
				return {
					display: 'block',
					margin: '1rem 0',
					color: isActive ? ' #87CDF6' : '#000',
					background: isActive ? 'rgba(135, 205, 246, 0.2)' : '#fff',
				};
			}}
			to={to}
			className='d-flex align-item-center nav-link'
			color={color}>
			<img src={img} alt={`${name}-img`} className='p-1 d-inline-block' />
			<span className='d-inline-block ps-4'>{name}</span>
		</Type>
	);
};

export default Navlink;
