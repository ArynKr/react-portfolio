import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a
				href='https://www.linkedin.com/in/ArynKr/'
				target='_blank'
				rel='noreferrer'
			>
				<BsLinkedin />
			</a>
			<a
				href='https://www.github.com/ArynKr'
				target='_blank'
				rel='noreferrer'
			>
				<BsGithub />
			</a>
			<a
				href='https://www.leetcode.com/ArynKr/'
				target='_blank'
				rel='noreferrer'
			>
				<SiLeetcode />
			</a>
		</div>
	);
};

export default HeaderSocials;
