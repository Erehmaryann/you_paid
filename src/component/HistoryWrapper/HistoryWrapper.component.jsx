import React from 'react';
import { Link } from 'react-router-dom';

const HistoryWrapper = () => {
	return (
		<div
			className='min-vh-100'
			style={{ background: 'rgba(135, 205, 246, 0.2)' }}>
			<div className='d-flex shadow m-auto mt-5 w-75 position-relative'>
				<div className='bg-info rounded-2 text-light text-center w-50 py-2'>
					<h5>3200</h5>
					<p>School Fee</p>
				</div>
				<img
					className='rounded-circle m-auto position-absolute'
					src='/assets/images/paypal-logo.png'
					alt='paypal-logo'
					style={{ width: '80px', height: '60px', left: '45%', top: '15%' }}
				/>
				<div className='bg-light rounded-2 d-flex align-items-center justify-content-center w-50 py-2'>
					<button type='' className='btn btn-info text-light'>
						Edit account
					</button>
				</div>
			</div>
			<div className='w-75 m-auto pt-4'>
				<p className=''>Credit history</p>
				<div className='rounded-3 shadow bg-light p-3'>
					<div className='col-12'>
						<span className='bg-success rounded-3 p-1 text-light'>
							Successful
						</span>
						<span className='ps-3 pe-5'>$500</span>
						<Link to='#' className='text-muted btn btn-outline-secondary'>
							Print history
						</Link>
					</div>
					<div className=''>
						<span className='text-muted'>21/04/2021</span>
						<span className='text-muted ps-3'>Hostel accomodation</span>
					</div>
				</div>
				<div className='rounded-3 shadow bg-light p-3 mt-4'>
					<div className='col-12'>
						<span className='bg-warning rounded-3 p-1 text-light'>Pending</span>
						<span className='ps-3 pe-5'>$23500</span>
						<Link to='#' className='text-muted btn btn-outline-secondary'>
							Print history
						</Link>
					</div>
					<div className=''>
						<span className='text-muted'>21/04/2021</span>
						<span className='text-muted ps-3'>School Fee</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HistoryWrapper;
