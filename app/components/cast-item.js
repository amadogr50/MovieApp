import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CastPropTypes} from '../prop-types';
import {CacheImage} from './index';
import movieDBImagesModule from '../modules/movie-db-images-module';
import dimensions from '../theme/dimensions';
import {Body, Label} from '../typography';
import UserIcon from '../assets/user.svg';
import theme from '../theme/theme';

const styles = StyleSheet.create({
  container: {
    width: 125,
  },
  image: {
    width: 125,
    aspectRatio: movieDBImagesModule.PROFILE_ASPECT_RATIO,
    borderRadius: dimensions.xxs,
    marginBottom: dimensions.xs,
  },
  imageUnknown: {
    width: 125,
    height: 125 / movieDBImagesModule.PROFILE_ASPECT_RATIO,
    backgroundColor: theme.colors.backgroundVariantA,
    borderRadius: dimensions.xxs,
    marginBottom: dimensions.xs,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CastItem = ({style, cast, ...props}) => {
  return (
    <View style={[styles.container, style]} {...props}>
      {cast.profile_path ? (
        <CacheImage
          style={styles.image}
          uri={movieDBImagesModule.getImageUrl(
            movieDBImagesModule.getImageWidth(125),
            cast.profile_path,
          )}
        />
      ) : (
        <View style={styles.imageUnknown}>
          <UserIcon width={36} height={36} fill={theme.colors.text} />
        </View>
      )}
      <Body>{cast.name}</Body>
      <Label>{cast.character}</Label>
    </View>
  );
};

CastItem.propTypes = {
  cast: CastPropTypes.isRequired,
};

export default CastItem;
