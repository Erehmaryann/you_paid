import React from 'react';
import Navlink from '../Navlink/Navlink.component';

const data = [
	{
		img: '/assets/images/svg/dashboard.svg',
		name: 'Dashboard',
		link: '/dashboard',
	},
	{ img: '/assets/images/svg/profile.svg', name: 'Profile', link: '/profile' },
	{
		img: '/assets/images/svg/payment.svg',
		name: 'Make payment',
		link: '/payment',
	},
	{ img: '/assets/images/svg/history.svg', name: 'History', link: '/history' },
	{
		img: '/assets/images/svg/receipt.svg',
		name: 'Print Receipt',
		link: '/receipt',
	},
	{
		img: '/assets/images/svg/report.svg',
		name: 'Report Issue',
		link: '/report',
	},
	{ img: '/assets/images/svg/logout.svg', name: 'Log out', link: '/' },
];

const sidebar = () => {
	return (
		<div className='min-vh-100 p-3 col-md-3' style={{ background: '#fff' }}>
			<div className='d-none d-md-block m-3 pb-3'>
				<img
					src='/assets/images/svg/logo.svg'
					alt='logo'
					style={{ width: '6rem' }}
				/>
			</div>
			<div className='d-block d-md-none m-3 pb-3'>
				<img
					src='/assets/images/svg/jer.svg'
					alt='logo'
					className='rounded-circle p-2 m-1'
					style={{
						background: '#E0E0E0',
					}}
				/>
				<h3 className='m-0'>Jermaine Cole</h3>
				<p className='m-0'>colecpe/17/3000@futa.edu.ng</p>
				<hr />
			</div>
			{data.map((item, index) => (
				<Navlink
					to={item.link}
					key={index}
					variant='link'
					img={item.img}
					name={item.name}
				/>
			))}
		</div>
	);
};

export default sidebar;
