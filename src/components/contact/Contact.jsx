import { MdOutlineEmail } from 'react-icons/md';
import { SiLinkedin } from 'react-icons/si';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import './contact.css';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(
			'service_cghdljp',
			'template_d6j6i42',
			form.current,
			'Go1XGzwU4sIzQNwWC'
		);
		e.target.reset();
	};

	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className='container contact__container'>
				<div className='contact__options'>
					<article className='contact__option'>
						<MdOutlineEmail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>aryankumar1504@gmail.com</h5>
						<a href='mailto:aryankumar1504@gmail.com'>
							Send a message
						</a>
					</article>
					<article className='contact__option'>
						<SiLinkedin className='contact__option-icon' />
						<h4>LinkedIn</h4>
						<h5>ArynKr</h5>
						<a href='https://www.linkedin.com/in/ArynKr'>
							Send a message
						</a>
					</article>
				</div>
				{/* End of Options Menu */}
				{/* Form Starts */}
				<form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='name'
						placeholder='Full Name'
						required
						minLength='3'
						maxLength={20}
					/>
					<input
						type='email'
						name='email'
						placeholder='Email'
						required
					/>
					<textarea
						name='message'
						rows='7'
						placeholder='Message'
						required
					></textarea>
					<button type='submit' className='btn btn-primary'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
