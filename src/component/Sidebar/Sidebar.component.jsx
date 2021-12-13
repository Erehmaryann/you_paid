import React from 'react';
import Navlink from '../Navlink/Navlink.component';

const data = [
	{ img: '/assets/images/svg/dashboard.svg', name: 'Dashboard', link: '/' },
	{ img: '/Fill 5.svg', name: 'About', link: '/about' },
	{ img: '/Vector.svg', name: 'Services', link: '/services' },
	{ img: '/Group.svg', name: 'Contact', link: '/contact' },
];

const sidebar = () => {
	return (
		<div className='min-vh-100' style={{ background: '#fff' }}>
			<div className='d-none d-md-block'>
				<img src='/assets/images/svg/logo.svg' alt='logo' className='' />
			</div>
			<div className='d-block d-md-none'>
				<img
					src='/assets/images/svg/jer.svg'
					alt='logo'
					className='rounded-circle'
					style={{
						background: '#E0E0E0',
						width: '100px',
						height: '100px',
						borderRadius: '50%',
					}}
				/>
				<h3 className='m-0'>Jermaine Cole</h3>
				<p className='m-0'>colecpe/17/3000@futa.edu.ng</p>
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
