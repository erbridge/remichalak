const projectsContext = require.context('./', true, /\.md$/);
const projects = projectsContext.keys().map(projectsContext);

export default projects;
