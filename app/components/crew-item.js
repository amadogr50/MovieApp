import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CacheImage} from './index';
import dimensions from '../theme/dimensions';
import movieDBImagesModule from '../modules/movie-db-images-module';
import {Body, Label} from '../typography';
import {CrewPropTypes} from '../prop-types';
import theme from '../theme/theme';
import UserIcon from '../assets/user.svg';

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

const CrewItem = ({style, crew, ...props}) => {
  return (
    <View style={[styles.container, style]} {...props}>
      {crew.profile_path ? (
        <CacheImage
          style={styles.image}
          uri={movieDBImagesModule.getImageUrl(
            movieDBImagesModule.getImageWidth(125),
            crew.profile_path,
          )}
        />
      ) : (
        <View style={styles.imageUnknown}>
          <UserIcon width={36} height={36} fill={theme.colors.text} />
        </View>
      )}
      <Body>{crew.name}</Body>
      <Label>{crew.job}</Label>
    </View>
  );
};

CrewItem.propTypes = {
  crew: CrewPropTypes.isRequired,
};

export default CrewItem;
