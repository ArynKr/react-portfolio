import React from 'react';
import CTA from './CTA';
import me from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

import './header.css';

const Header = () => {
	return (
		<header id='header'>
			<div className='container header__container'>
				<h5>Hello I'm</h5>
				<h1>Aryan Kumar</h1>
				<h5 className='text-light'>Full-Stack Web Developer</h5>

				<CTA />

				<HeaderSocials />

				<div className='me'>
					<img src={me} alt='' />
				</div>

				<a href='#contact' className='scroll__down'>
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
