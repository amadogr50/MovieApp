import PropTypes from 'prop-types';

const ImagePropTypes = PropTypes.shape({
  aspect_ratio: PropTypes.number,
  file_path: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
});

export default ImagePropTypes;
