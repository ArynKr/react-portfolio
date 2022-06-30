function Project({ project }) {
  return (
    <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={project.image} alt={project.title} />
      </div>
      <h3>{project.title}</h3>
      <div className='portfolio__item-cta'>
        <a
          href={project.links.github}
          className='btn'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </a>
        <a
          href={project.links.live}
          className='btn btn-primary'
          target='_blank'
          rel='noreferrer'
        >
          Live Demo
        </a>
      </div>
    </article>
  );
}

export default Project;
