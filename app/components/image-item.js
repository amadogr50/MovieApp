import React from 'react';
import {View} from 'react-native';
import CacheImage from './cache-image';
import movieDBImagesModule from '../modules/movie-db-images-module';
import {ImagePropTypes} from '../prop-types';
import dimensions from '../theme/dimensions';

const ImageItem = ({image, ...props}) => {
  return (
    <View {...props}>
      <CacheImage
        style={{
          height: 150,
          aspectRatio: image.aspect_ratio,
          borderRadius: dimensions.xxs,
        }}
        uri={movieDBImagesModule.getImageUrl(
          movieDBImagesModule.getImageWidth(150 * image.aspect_ratio),
          image.file_path,
        )}
      />
    </View>
  );
};

ImageItem.propTypes = {
  image: ImagePropTypes.isRequired,
};

export default ImageItem;
