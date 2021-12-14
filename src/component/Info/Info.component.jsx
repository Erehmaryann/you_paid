import React from 'react';
import Navlink from '../Navlink/Navlink.component';

const infoData = [
	{
		img: '/assets/images/svg/profile.svg',
		name: 'Jermaine Cole',
	},
	{
		img: '/assets/images/svg/reg.svg',
		name: 'CPE/17/3000',
	},
	{
		img: '/assets/images/svg/course.svg',
		name: 'Computer Engineering',
	},
	{
		img: '/assets/images/svg/level.svg',
		name: '400L',
	},
	{
		img: '/assets/images/svg/dept.svg',
		name: 'SEET',
	},
	{
		img: '/assets/images/svg/velope.svg',
		name: 'colecpe173000@fu...',
	},
];

const Info = () => {
	return (
		<div
			className='p-4'
			style={{ background: '#87CDF6', borderRadius: '21px' }}>
			<span className='p-2'>
				Total Amount paid: <b># 24,000</b>
			</span>
			<div className='row'>
				{infoData.map((item, index) => (
					<div className='col-6 py-3' key={index}>
						<Navlink img={item.img} name={item.name} variant='div' />
					</div>
				))}
			</div>
		</div>
	);
};

export default Info;
