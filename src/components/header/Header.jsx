import React from 'react';
import CTA from './CTA';

const Header = () => {
	return (
		<header>
			<div className='container header__container'>
				<h5>Hello I'm</h5>
				<h1>Aryna Kumar</h1>
				<h5 className='text-light'>Full-Stack Web Developer</h5>
				<CTA />
			</div>
		</header>
	);
};

export default Header;
