import React from 'react';
import Logo from '../../assets/images/svg/logo.svg';
import Navlink from '../Navlink/Navlink.component';

const data = [
	{ img: '/Fill 1.svg', name: 'Home', link: '/' },
	{ img: '/Fill 5.svg', name: 'About', link: '/about' },
	{ img: '/Vector.svg', name: 'Services', link: '/services' },
	{ img: '/Group.svg', name: 'Contact', link: '/contact' },
];

const sidebar = () => {
	return (
		<div className='min-vh-100'>
			<img src={Logo} alt='logo' className='' />
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
