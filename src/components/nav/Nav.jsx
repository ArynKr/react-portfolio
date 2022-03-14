import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

import './nav.css';

const Nav = () => {
	const [activeNav, setActiveNav] = useState('#header');

	return (
		<nav>
			<a
				href='#header'
				onClick={() => setActiveNav('#header')}
				className={activeNav === '#header' ? 'active' : ''}
			>
				<AiOutlineHome />
			</a>
			<a
				href='#about'
				onClick={() => setActiveNav('#about')}
				className={activeNav === '#about' ? 'active' : ''}
			>
				<AiOutlineUser />
			</a>
			<a
				href='#experience'
				onClick={() => setActiveNav('#experience')}
				className={activeNav === '#experience' ? 'active' : ''}
			>
				<BiBook />
			</a>
			<a
				href='#contact'
				onClick={() => setActiveNav('#contact')}
				className={activeNav === '#contact' ? 'active' : ''}
			>
				<RiServiceLine />
			</a>
			<a
				href='#footer'
				onClick={() => setActiveNav('#footer')}
				className={activeNav === '#footer' ? 'active' : ''}
			>
				<BiMessageSquareDetail />
			</a>
		</nav>
	);
};

export default Nav;
