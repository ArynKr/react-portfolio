import Project from './Project';
import ProjectImg1 from '../../assets/project1.png';
import ProjectImg2 from '../../assets/project2.png';
import cryptoGalaxyImg from '../../assets/crypto-galaxy.png';

import './portfolio.css';

const projects = [
  {
    id: 1,
    title: 'Crypto Galaxy',
    description: 'Cryptoverse is a cryptocurrency information and news webapp',
    links: {
      github: 'https://github.com/ArynKr/crypto-galaxy',
      live: 'https://crypto-galaxy.netlify.app',
    },
    image: cryptoGalaxyImg,
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    description: 'This is a personal portfolio website',
    links: {
      github: 'https://www.github.com/ArynKr/react-portfolio',
      live: 'https://aryankumar.in',
    },
    image: ProjectImg1,
  },
  {
    id: 3,
    title: 'Personal Portfolio (Old)',
    description: 'This is a personal portfolio website',
    links: {
      github: 'https://www.github.com/ArynKr/arynkr-homepage',
      live: 'https://arynkr.vercel.app',
    },
    image: ProjectImg2,
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container '>
        {projects.map((item) => (
          <Project key={item.id} project={item} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
