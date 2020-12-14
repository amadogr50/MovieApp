import PropTypes from 'prop-types';

const CrewPropTypes = PropTypes.shape({
  adult: PropTypes.bool,
  gender: PropTypes.number,
  id: PropTypes.number,
  known_for_department: PropTypes.string,
  name: PropTypes.string,
  original_name: PropTypes.string,
  profile_path: PropTypes.string,
  department: PropTypes.string,
  job: PropTypes.string,
});

export default CrewPropTypes;
