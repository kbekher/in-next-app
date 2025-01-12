import React from 'react'
import Project from './Project';
import Illustrations from '../Illustrations/Illustrations';

const Projects = () => {
  const projectsArray = [
    { id: 1, type: "ux", name: "ace-and-tate" },
    { id: 2, type: "ux", name: "xtrafit" },
    { id: 3, type: "brand", name: "flowtech" },
    { id: 4, type: "brand", name: "paysera" },
  ];

  return (
    <div id="work">
      {projectsArray.map(project => (
        <Project type={project.type} name={project.name} key={project.id} />
      ))}

      <Illustrations />
    </div>
  )
}

export default Projects;
