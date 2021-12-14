import React from 'react';

const Profile = () => {
	return (
		<div className='col-lg-12'>
			<div className='d-flex justify-content-center align-items-center mt-5'>
				<img
					src='/assets/images/svg/jer.svg'
					alt=''
					className='shadow rounded-circle p-4'
					style={{ background: '#fff', width: '200px', height: '200px' }}
				/>
			</div>
			<div className='d-flex justify-content-around align-items-center mt-5 flex-column'>
				<p style={{ color: '#08517A', textAlign: 'justify' }}>Full Name:</p>
				<div className='p-2 shadow rounded-3 bg-light mb-3 w-50'>
					Jermaine Cole
				</div>
				<p style={{ color: '#08517A', textAlign: 'justify' }}>Email:</p>
				<div className='p-2 shadow rounded-3 bg-light mb-3 w-50'>
					colecpe/17/3000@futa.edu.ng
				</div>
			</div>
		</div>
	);
};

export default Profile;
