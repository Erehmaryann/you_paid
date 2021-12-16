import React from 'react';

const VerticalDue = ({ img, name, btnParam, amount }) => {
	return (
		<div className='d-flex justify-content-between align-items-center'>
			<img
				className='py-0 px-2  rounded-3'
				src={img}
				alt={`${name}-img`}
				style={{ background: '#8CE68C', width: '35px', height: '35px' }}
			/>
			<p style={{ fontSize: '0.8rem' }} className='py-3 mb-0'>
				{name}
				<span className='d-block'>{amount}</span>
			</p>
			<button className='btn text-muted' style={{ fontSize: '0.7rem' }}>
				{btnParam}
			</button>
		</div>
	);
};

export default VerticalDue;
