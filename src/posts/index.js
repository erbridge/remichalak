const postsContext = require.context('./', true, /\.md$/);
const posts = postsContext.keys().map(postsContext);

export default posts;
