import React, { Fragment } from 'react';
import VerticalDue from '../VerticalDue/VerticalDue.component';

const TransData = [
	{
		img: '/assets/images/svg/course.svg',
		name: 'Departmental Due',
		btnParam: 'Print Receipt',
		amount: '# 2,000',
		date: '21/12/2021',
	},
	{
		img: '/assets/images/svg/dept.svg',
		name: 'Faculty Due',
		btnParam: 'Print Receipt',
		amount: '# 1,000',
		date: '13/02/2021',
	},
	{
		img: '/assets/images/svg/course.svg',
		name: 'Departmental Due',
		btnParam: 'Print Receipt',
		amount: '# 2,000',
		date: '21/12/2021',
	},
	{
		img: '/assets/images/svg/dept.svg',
		name: 'Faculty Due',
		btnParam: 'Print Receipt',
		amount: '# 1,000',
		date: '13/02/2021',
	},
];

const TransWrapper = () => {
	return (
		<div className='max-vh-100 p-4 col-lg-4'>
			<div className='d-flex justify-content-between pt-3'>
				<h5>Latest Transactions</h5>
				<img
					src='/assets/images/svg/latestTrans.svg'
					alt='Latest Transactions'
				/>
			</div>
			<div>
				{TransData.map((data, index) => (
					<Fragment key={index}>
						<p className='pt-3'>{data.date}</p>
						<VerticalDue {...data} />
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default TransWrapper;
