import React from 'react';
import PaymentWrapper from '../component/PaymentWrapper/PaymentWrapper.component';
import TransWrapper from '../component/TransWrapper/TransWrapper.component';

const Dashboard = () => {
	return (
		<div className='row col'>
			<PaymentWrapper />
			<TransWrapper />
		</div>
	);
};

export default Dashboard;
