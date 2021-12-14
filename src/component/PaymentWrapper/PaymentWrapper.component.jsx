import React from 'react';
import Info from '../Info/Info.component';
import SchoolDues from '../SchoolDues/SchoolDues.component';

const PaymentWrapper = () => {
	return (
		<div
			className='min-vh-100 p-4 col-lg-6'
			style={{ backgroundColor: ' #87cdf633' }}>
			<div className='py-4 d-flex justify-content-between px-2'>
				<div>
					<h3>Good Morning Jermaine,</h3>
					<p>Welcome back</p>
				</div>
				<div>
					<img
						src='/assets/images/svg/jer.svg'
						alt=''
						className='shadow rounded-circle p-2 me-3'
						style={{ background: '#fff' }}
					/>
					<img src='/assets/images/svg/notify.svg' alt='' />
				</div>
			</div>
			<Info />
			<p className='pt-5 ps-4 pb-3'>
				Which payment would like to complete today?
			</p>
			<SchoolDues />
		</div>
	);
};

export default PaymentWrapper;
