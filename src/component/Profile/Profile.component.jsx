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
			<div className='d-flex justify-content-around align-items-center mt-4'>
				<div>
					<p>Full Name</p>
					<p className='p-2 shadow rounded-3 bg-light text-center w-25'>
						Jermaine Cole
					</p>
				</div>
				<div className='p-2 shadow rounded-3 bg-light text-center w-25'>
					colecpe/17/3000@futa.edu.ng
				</div>
			</div>
		</div>
	);
};

export default Profile;
