import React from 'react';
import {Image} from 'react-native';
import {useImageCaching} from '../hooks';

const CacheImage = ({uri, ...props}) => {
  const {source} = useImageCaching(uri);

  return <Image {...props} source={source} />;
};

CacheImage.propTypes = {};

export default CacheImage;
