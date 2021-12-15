import React from 'react';

const ReceiptWrapper = () => {
	return (
		<div
			className='min-vh-100 d-flex flex-column align-items-center'
			style={{ background: 'rgba(135, 205, 246, 0.2) ' }}>
			<h5 className='pt-5 pb-2' style={{ color: 'grey' }}>
				Print Invoice / Receipt
			</h5>
			<input
				className='w-50 form-control'
				placeholder='Remita Retrieval Reference [RRR]'
			/>
			<button className='w-50 btn btn-info mt-4 text-light' type='submit'>
				Proceed
			</button>
			<h5 className='pt-3 pb-2' style={{ color: 'grey' }}>
				Verify Payment Status
			</h5>
			<input
				type='text'
				className='w-50 form-control'
				placeholder='Remita Retrieval Reference [RRR]'
			/>
			<button className='w-50 btn btn-info mt-4 text-light' type='submit'>
				Verify
			</button>
		</div>
	);
};

export default ReceiptWrapper;
