import assets from '../assets';

const projectsContext = require.context('./', true, /\.ya?ml$/);

const projects = projectsContext
  .keys()
  .map(projectsContext)
  .map(({ images, title }) => ({
    images: images.map(image => {
      let alt;
      let caption = '';
      let src = image;

      if (typeof image === 'string') {
        alt = title;
        src = assets[image];
      } else {
        caption = image.caption || '';
        alt = image.alt || caption || title;
        src = assets[image.src];
      }

      return { alt, caption, src };
    }),
    title,
  }));

export default projects;
