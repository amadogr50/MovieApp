import React from 'react';
import {Image} from 'react-native';
import {useImageCaching} from '../hooks';

const CacheImage = ({uri, ...props}) => {
  const {source} = useImageCaching(uri);

  return <Image source={source} {...props} />;
};

CacheImage.propTypes = {};

export default CacheImage;
