import React from 'react';

const ReportWrapper = () => {
	return (
		<div
			className='min-vh-100 d-flex flex-column align-items-start pt-5 ps-5'
			style={{ background: 'rgba(135, 205, 246, 0.2) ' }}>
			<h4>What's Happening?</h4>
			<p>Check all that apply</p>
			<div className='form-check form-check-inline'>
				<input className='form-check-input' type='checkbox' id='inlineRadio1' />
				<label htmlFor='inlineRadio1' className='form-check-label'>
					Fee problem
				</label>
			</div>
			<div className='form-check form-check-inline'>
				<input className='form-check-input' type='checkbox' id='inlineRadio2' />
				<label htmlFor='inlineRadio2' className='form-check-label'>
					Accomodation problem
				</label>
			</div>
			<div className='form-check form-check-inline'>
				<input className='form-check-input' type='checkbox' id='inlineRadio3' />
				<label htmlFor='inlineRadio3' className='form-check-label'>
					Course problem
				</label>
			</div>
			<div className='form-group'>
				<label htmlFor='ControlTextarea1' className='py-2'>
					It's something else
				</label>
				<textarea
					className='form-control'
					rows='3'
					// col='8'
					placeholder="let's know what's going on."
					id='ControlTextarea1'
				/>
			</div>
			<button className='btn btn-info mt-3 text-light' type='submit'>
				Submit Report
			</button>
		</div>
	);
};

export default ReportWrapper;
