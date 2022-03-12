import { BiCheck } from 'react-icons/bi';
import { MdOutlineDevicesOther } from 'react-icons/md';
import { FaCode } from 'react-icons/fa';
import { IoMdColorPalette } from 'react-icons/io';

import './services.css';

const Services = () => {
	return (
		<section id='services'>
			<h5>What I Offer</h5>
			<h2>Services</h2>

			<div className='container services__container'>
				<article className='service'>
					<div className='service__head'>
						<h3>
							<MdOutlineDevicesOther className='h3icon' /> Frontend
							Development
						</h3>
					</div>
					<ul className='service__list'>
						<li>
							<BiCheck className='service__list-icon' />
							<p>
								Lorem ipsum dolor sit amet aryan adipisicing elit.
							</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>
								Lorem ipsum dolor sit amet aryan adipisicing elit.
							</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>
								Lorem ipsum dolor sit amet aryan adipisicing elit.
							</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>
								Lorem ipsum dolor sit amet aryan adipisicing elit.
							</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>
								Lorem ipsum dolor sit amet aryan adipisicing elit.
							</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>
								Lorem ipsum dolor sit amet aryan adipisicing elit.
							</p>
						</li>
					</ul>
				</article>

				<article className='service'>
					<div className='service__head'>
						<h3>
							{' '}
							<FaCode className='h3icon' /> Backend Development
						</h3>
					</div>
					<ul className='service__list'>
						<li>
							<BiCheck className='service__list-icon' />
							<p>
								Lorem ipsum dolor sit amet aryan adipisicing elit.
							</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>
								Lorem ipsum dolor sit amet aryan adipisicing elit.
							</p>
						</li>

						<li>
							<BiCheck className='service__list-icon' />
							<p>
								Lorem ipsum dolor sit amet aryan adipisicing elit.
							</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>
								Lorem ipsum dolor sit amet aryan adipisicing elit.
							</p>
						</li>
					</ul>
				</article>

				<article className='service'>
					<div className='service__head'>
						<h3>
							{' '}
							<IoMdColorPalette className='h3icon' /> UI Designing
						</h3>
					</div>
					<ul className='service__list'>
						<li>
							<BiCheck className='service__list-icon' />
							<p>
								Lorem ipsum dolor sit amet aryan adipisicing elit.
							</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>
								Lorem ipsum dolor sit amet aryan adipisicing elit.
							</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>
								Lorem ipsum dolor sit amet aryan adipisicing elit.
							</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>
								Lorem ipsum dolor sit amet aryan adipisicing elit.
							</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>
								Lorem ipsum dolor sit amet aryan adipisicing elit.
							</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
};

export default Services;
