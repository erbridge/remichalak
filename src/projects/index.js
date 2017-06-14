import assets from '../assets';

const projectsContext = require.context('./', true, /\.ya?ml$/);

const projects = projectsContext
  .keys()
  .map(projectsContext)
  .map(({ images, title }) => ({
    images: images.map(image => assets[image]),
    title,
  }));

export default projects;
