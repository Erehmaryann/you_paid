import React from 'react';

const FeeWrapper = () => {
	return (
		<div
			className='min-vh-100 d-flex flex-column align-items-center pt-5'
			style={{ background: 'rgba(135, 205, 246, 0.2) ' }}>
			<h5 className='pt-5 pb-3' style={{ color: '#87CDF6' }}>
				Enter Your Student Payment Code To Process Payment
			</h5>
			<input
				type='text'
				className='w-50 form-control'
				placeholder='Student Payment Code [SPC1234567..]'
			/>
			<button className='w-50 btn btn-info mt-4 text-light' type='submit'>
				Proceed
			</button>
		</div>
	);
};

export default FeeWrapper;
