import PropTypes from 'prop-types';

export const routeShape = {
  exact: PropTypes.bool,
  external: PropTypes.bool,
  link: PropTypes.string,
  name: PropTypes.string,
  path: PropTypes.string.isRequired,
  title: PropTypes.string,
};

routeShape.routes = PropTypes.arrayOf(PropTypes.shape(routeShape));

const routePropType = PropTypes.shape(routeShape);

export default routePropType;
