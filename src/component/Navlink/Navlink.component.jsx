/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlink = ({ img, name, variant, to, color }) => {
	return (
		<>
			{variant === 'link' ? (
				<NavLink
					style={({ isActive }) => ({
						display: 'block',
						margin: '1rem 0',
						color: isActive ? ' #87CDF6' : '#000',
						background: isActive ? 'rgba(135, 205, 246, 0.2)' : '#fff',
					})}
					to={to}
					className='d-flex align-item-center nav-link'
					color={color}>
					<img src={img} alt={`${name}-img`} className='p-1 d-inline-block' />
					<span className='d-inline-block ps-4'>{name}</span>
				</NavLink>
			) : (
				<div className='d-flex align-item-center' color={color}>
					<img src={img} alt={`${name}-img`} className='p-1 d-inline-block' />
					<span className='d-inline-block ps-4'>{name}</span>
				</div>
			)}
		</>
	);
};

export default Navlink;
