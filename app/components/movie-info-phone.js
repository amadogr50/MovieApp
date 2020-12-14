import React from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import globalStyles from '../theme/global-styles';
import {CacheImage} from './index';
import movieDBImagesModule from '../modules/movie-db-images-module';
import {Body, Subtitle} from '../typography';
import translations from '../i18n/translations';
import {MoviePropTypes} from '../prop-types';
import {useTranslation} from 'react-i18next';
import theme from '../theme/theme';
import dimensions from '../theme/dimensions';

const styles = StyleSheet.create({
  field: {
    fontWeight: '700',
  },
  value: {
    color: theme.colors.textAlternative,
  },
  info: {
    marginHorizontal: dimensions.s,
    flex: 2,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  poster: {
    flex: 1,
    aspectRatio: 2 / 3,
    borderRadius: dimensions.xxs,
  },
});

const MovieInfoPhone = ({movie}) => {
  const screenWidth = useWindowDimensions().width;
  const {t} = useTranslation();

  return (
    <>
      <View style={[styles.row, globalStyles.verticalSpacing]}>
        <CacheImage
          style={styles.poster}
          uri={movieDBImagesModule.getImageUrl(
            movieDBImagesModule.getImageWidth(screenWidth),
            movie?.poster_path,
          )}
        />
        <View style={styles.info}>
          <View style={styles.row}>
            <Body style={styles.field}>
              {t(translations.TITLE)}:{' '}
              <Body style={styles.value}>{movie?.title}</Body>
            </Body>
          </View>
          <View style={styles.row}>
            <Body style={styles.field}>
              {t(translations.ORIGINAL_TITLE)}:{' '}
              <Body style={styles.value}>{movie?.original_title}</Body>
            </Body>
          </View>
          <View style={styles.row}>
            <Body style={styles.field}>
              {t(translations.RELEASE_DATE)}:{' '}
              <Body style={styles.value}>{movie?.release_date}</Body>
            </Body>
          </View>
          <View style={styles.row}>
            <Body style={styles.field}>
              {t(translations.RUNNING_TIME)}:{' '}
              <Body style={styles.value}>{movie?.runtime}min</Body>
            </Body>
          </View>
        </View>
      </View>
      <Subtitle style={globalStyles.verticalSpacing}>
        {t(translations.THE_PLOT)}
      </Subtitle>
      <Body style={globalStyles.verticalSpacing}>{movie?.overview}</Body>
    </>
  );
};

MovieInfoPhone.propTypes = {
  movie: MoviePropTypes.isRequired,
};

export default MovieInfoPhone;
