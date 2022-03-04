import { BsPatchCheckFill } from 'react-icons/bs';
import { BiCodeCurly } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import {
	SiJavascript,
	SiTailwindcss,
	SiMaterialui,
	SiChakraui,
	SiNodedotjs,
	SiMongodb,
	SiNextdotjs,
	SiMysql,
	SiExpress,
	SiPostgresql,
} from 'react-icons/si';

import './experience.css';

const Experience = () => {
	return (
		<section id='experience'>
			<h5>What Skills I Have</h5>
			<h2>My Experience</h2>

			<div className='container experience__container'>
				{/* Frontend Card */}
				<div className='experience__frontend'>
					<h3>Frontend Development</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<FaReact style={{ fontSize: '1.5rem' }} />
							<div>
								<h4>React JS</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiJavascript style={{ fontSize: '1.5rem' }} />
							<div>
								<h4>Javascript</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<BiCodeCurly style={{ fontSize: '1.5rem' }} />
							<div>
								<h4>HTML / CSS</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiTailwindcss style={{ fontSize: '1.5rem' }} />
							<div>
								<h4>Tailwind CSS</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiMaterialui style={{ fontSize: '1.5rem' }} />
							<div>
								<h4>Material UI</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiChakraui style={{ fontSize: '1.5rem' }} />
							<div>
								<h4>Chakra UI</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
					</div>
				</div>

				{/* Backend Card */}
				<div className='experience__backend'>
					<h3>Backend Programming</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<SiNodedotjs style={{ fontSize: '1.5rem' }} />
							<div>
								<h4>Node JS</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiExpress style={{ fontSize: '1.5rem' }} />
							<div>
								<h4>Express JS</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiNextdotjs style={{ fontSize: '1.5rem' }} />
							<div>
								<h4>Next JS</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiMongodb style={{ fontSize: '1.5rem' }} />
							<div>
								<h4>Mongo DB</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiMysql style={{ fontSize: '1.5rem' }} />
							<div>
								<h4>MySQL</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiPostgresql style={{ fontSize: '1.5rem' }} />
							<div>
								<h4>PostgreSQL</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
