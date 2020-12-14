import React from 'react';
import PropTypes from 'prop-types';
import {ImageBackground} from 'react-native';
import {useImageCaching} from '../hooks';

const CacheImageBackground = ({uri, children, ...props}) => {
  const {source} = useImageCaching(uri);

  return (
    <ImageBackground source={source} {...props}>
      {children}
    </ImageBackground>
  );
};

CacheImageBackground.propTypes = {
  children: PropTypes.node,
};

export default CacheImageBackground;
