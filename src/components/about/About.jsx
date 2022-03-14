import me from '../../assets/workingstack.png';
import { FaAward } from 'react-icons/fa';
import { VscFolderActive } from 'react-icons/vsc';

import './about.css';

const About = () => {
	return (
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={me} alt='' />
					</div>
				</div>

				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Experience</h5>
							<small>2+ years</small>
						</article>

						<article className='about__card'>
							<VscFolderActive className='about__icon' />
							<h5>Projects</h5>
							<small>20+ Completed</small>
						</article>

						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Experience</h5>
							<small>2+ years</small>
						</article>
					</div>

					<p
						style={{
							marginBottom: '0',
							fontSize: '1.5rem',
							fontWeight: 'bold',
						}}
					>
						Hi, I’m Aryan. Nice to meet you.
					</p>
					<p style={{ marginTop: '1rem', marginBottom: '0' }}>
						I'm a full-stack developer based in Kolkata, India.
					</p>
					<p style={{ marginTop: '1rem', marginBottom: '0' }}>
						I am an undergraduate currently pursuing B. Tech in
						Information Technology from Heritage Institute of
						Technology, Kolkata.
					</p>
					<p style={{ marginTop: '1rem', marginBottom: '0' }}>
						I love learning about new technologies and using them in
						my projects to create something beneficial and practical.
					</p>
					<p style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
						Feel free to take a look at my latest projects{' '}
						<a href='#portfolio'>here.</a>
					</p>
					<a href='#contact' className='btn btn-primary'>
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
