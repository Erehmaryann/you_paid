import React from 'react';

const Dues = ({ img, name }) => {
	return (
		<div className=''>
			<img
				className='p-4 rounded-3'
				src={img}
				alt={`${name}-img`}
				style={{ background: '#8CE68C', width: '80px', height: '80px' }}
			/>
			<p style={{ fontSize: '0.8rem' }} className='py-3'>
				{name}
			</p>
		</div>
	);
};

export default Dues;
