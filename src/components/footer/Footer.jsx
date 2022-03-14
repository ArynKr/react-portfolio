import React from 'react';
import {
	SiLinkedin,
	SiGithub,
	SiGmail,
	SiTwitter,
} from 'react-icons/si';

import './footer.css';

const Footer = () => {
	return (
		<footer id='footer'>
			<a href='#' className='footer__logo'>
				ArynKr
			</a>

			<ul className='permalinks'>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#experience'>Experience</a>
				</li>
				<li>
					<a href='#services'>Services</a>
				</li>
				<li>
					<a href='#portfolio'>Projects</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>

			<div className='footer__socials'>
				<a href='https://www.linkedin.com/in/ArynKr'>
					<SiLinkedin />
				</a>
				<a href='https://www.github.com/ArynKr'>
					<SiGithub />
				</a>
				<a href='https://www.twitter.com/Aryn__Kr'>
					<SiTwitter />
				</a>
				<a href='mailto:aryankumar1504@gmail.com'>
					<SiGmail />
				</a>
			</div>

			<div className='footer__copyright'>
				<small>&copy; 2022 ArynKr | All Rights Reserved</small>
			</div>
		</footer>
	);
};

export default Footer;
