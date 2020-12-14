import PropTypes from 'prop-types';

const VideoPropTypes = PropTypes.shape({
  id: PropTypes.string,
  key: PropTypes.string,
  name: PropTypes.string,
  site: PropTypes.string,
  size: PropTypes.number,
  type: PropTypes.string,
});

export default VideoPropTypes;
