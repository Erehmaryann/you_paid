import React from 'react';

const TransWrapper = () => {
	return (
		<div className='min-vh-100 p-4 col-lg-3'>
			<div className='d-flex justify-content-between'>
				{/* <div className> */}
				<h5>Latest Transactions</h5>
				{/* </div> */}
				<img
					src='/assets/images/svg/latestTrans.svg'
					alt='Latest Transactions'
				/>
			</div>
		</div>
	);
};

export default TransWrapper;
