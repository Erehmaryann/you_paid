import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';

const FeeWrapper = () => {
	const publicKey = 'pk_test_1472c0bdd0a36d943e3045522bb8143d0002f3e7';
	const amount = 1000000; // Remember, set in kobo!
	const [email, setEmail] = useState('');
	const [spc, setSpc] = useState('');

	const componentProps = {
		email,
		amount,
		metadata: {
			spc,
		},
		publicKey,
		text: 'Pay Now',
		onSuccess: () =>
			alert('Thanks for doing business with us! Come back soon!!'),
		onClose: () => alert("Wait! Don't leave :("),
	};

	return (
		<div
			className='min-vh-100 d-flex flex-column align-items-center pt-5'
			style={{ background: 'rgba(135, 205, 246, 0.2) ' }}>
			<h5 className='pt-5 pb-3' style={{ color: '#87CDF6' }}>
				Enter Your Student Payment Code To Process Payment
			</h5>
			<input
				type='text'
				className='w-50 form-control mb-4'
				placeholder='Student Email'
				id='email'
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type='text'
				className='w-50 form-control'
				placeholder='Student Payment Code [SPC1234567..]'
				id='spc'
				onChange={(e) => setSpc(e.target.value)}
			/>
			{/* <button className='w-50 btn btn-info mt-4 text-light' type='submit'>
				Proceed
			</button> */}
			<PaystackButton
				className='w-50 btn btn-info mt-4 text-light'
				{...componentProps}
			/>
		</div>
	);
};

export default FeeWrapper;
