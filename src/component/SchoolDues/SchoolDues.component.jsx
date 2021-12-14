import React from 'react';
import Dues from '../Dues/Dues.component';

const data = [
	{
		id: 1,
		name: 'DEPT. DUE',
		img: '/assets/images/svg/course.svg',
	},
	{
		id: 2,

		name: 'FACULTY DUE',
		img: '/assets/images/svg/dept.svg',
	},
	{
		id: 3,
		name: 'OTHERS',
		img: '/assets/images/svg/others.svg',
	},
];

const SchoolDues = () => {
	return (
		<div className='ps-4 row'>
			{/* {data.map((item, index) => ( */}
			<div className='col-3' key={data[0].id}>
				<Dues name={data[0].name} img={data[0].img} />
			</div>
			<div className='col'></div>
			<div className='col-3' key={data[1].id}>
				<Dues name={data[1].name} img={data[1].img} />
			</div>
			<div className='col'></div>
			<div className='col-3' key={data[2].id}>
				<Dues name={data[2].name} img={data[2].img} />
			</div>
			{/* ))} */}
		</div>
	);
};

export default SchoolDues;
