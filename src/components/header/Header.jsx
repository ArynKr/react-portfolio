import React from 'react';
import CTA from './CTA';
import me from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import Typed from 'typed.js';

import './header.css';

const Header = () => {
	const el = React.useRef(null);
	// Create reference to store the Typed instance itself
	const typed = React.useRef(null);

	React.useEffect(() => {
		const options = {
			strings: [
				'Full-Stack Web Developer',
				'Web Designer',
				'Competitive Programmer',
				'Software Developer',
			],
			typeSpeed: 75,
			backSpeed: 50,
			loop: true,
			showCursor: false,
			smartBackspace: true,
		};

		// elRef refers to the <span> rendered below
		typed.current = new Typed(el.current, options);

		return () => {
			// Make sure to destroy Typed instance during cleanup
			// to prevent memory leaks
			typed.current.destroy();
		};
	}, []);

	return (
		<header id='header'>
			<div className='container header__container'>
				<h4>Hello I'm</h4>
				<h1>Aryan Kumar</h1>
				<span
					className='typed'
					style={{ whiteSpace: 'pre' }}
					ref={el}
				/>

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
