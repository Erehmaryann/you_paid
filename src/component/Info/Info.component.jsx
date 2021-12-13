import React from 'react';
import Navlink from '../Navlink/Navlink.component';

const infoData = [
	{
		img: '/assets/images/svg/profile.svg',
		title: '',
	},
];

const Info = () => {
	return (
		<div>
			{infoData.map((item, index) => {
				return <Navlink key={index} img={item.img} title={item.title} />;
			})}
		</div>
	);
};

export default Info;
