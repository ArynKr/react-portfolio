import me from '../../assets/me.png';
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

					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Ea ut ratione quidem laudantium soluta eveniet harum iusto
						consequuntur at excepturi eos natus, magnam ex enim,
						provident iste tempore quisquam itaque.
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
