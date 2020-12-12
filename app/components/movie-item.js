import React from 'react';

import {StyleSheet, View} from 'react-native';
import movieDBImagesModule from '../modules/movie-db-images-module';
import {MoviePropTypes} from '../prop-types';
import dimensions from '../theme/dimensions';
import CacheImage from './cache-image';

const styles = StyleSheet.create({
  image: {
    borderRadius: dimensions.xxs,
    aspectRatio: 2 / 3,
  },
});

const MovieItem = ({width, movie, ...props}) => {
  return (
    <View {...props}>
      <CacheImage
        style={styles.image}
        source={{
          uri: movieDBImagesModule.getImageUrl(width, movie.poster_path),
        }}
      />
    </View>
  );
};

MovieItem.propTypes = {
  movie: MoviePropTypes,
};

export default MovieItem;
