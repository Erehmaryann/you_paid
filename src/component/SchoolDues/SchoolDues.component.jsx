import React from 'react';
import Dues from '../Dues/Dues.component';

const data = [
	{
		name: 'DEPT. DUE',
		img: '/assets/images/svg/course.svg',
	},
	{
		name: 'FACULTY DUE',
		img: '/assets/images/svg/dept.svg',
	},
	{
		name: 'OTHERS',
		img: '/assets/images/svg/others.svg',
	},
];

const SchoolDues = () => {
	return (
		<div className='ps-4 row'>
			{data.map((item, index) => (
				<div className='col-3' key={index}>
					<Dues {...item} />
				</div>
			))}
		</div>
	);
};

export default SchoolDues;
