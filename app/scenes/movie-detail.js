import React, {useState} from 'react';
import {FlatList, StyleSheet, useWindowDimensions, View} from 'react-native';
import {useQuery} from 'react-query';
import movieDBInstance from '../services/movie-db-instance';
import movieDBEndpoints from '../services/movie-db-endpoints';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import DeviceInfo from 'react-native-device-info';
import {
  CacheImageBackground,
  CastItem,
  CrewItem,
  HorizontalDivider,
  HorizontalSeparator,
  ImageItem,
  MovieInfoPhone,
  MovieInfoTablet,
  Scene,
  VideoItem,
} from '../components';
import movieDBImagesModule from '../modules/movie-db-images-module';
import {Headline, Label, Quote, Subtitle, Title} from '../typography';
import dimensions from '../theme/dimensions';
import theme from '../theme/theme';
import globalStyles from '../theme/global-styles';
import {useTranslation} from 'react-i18next';
import translations from '../i18n/translations';
import {useHeaderHeight} from '@react-navigation/stack';

const styles = StyleSheet.create({
  ratingContainer: {
    backgroundColor: theme.colors.backgroundVariantA,
  },
  ratingElement: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: dimensions.s,
  },
  content: {
    padding: dimensions.s,
  },
  foreground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: dimensions.s,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

const MovieDetail = ({route}) => {
  const screenHeight = useWindowDimensions().height;
  const screenWidth = useWindowDimensions().width;
  const headerHeight = useHeaderHeight();

  const {t} = useTranslation();
  const [enabled, setEnabled] = useState(true);

  const {id} = route.params;

  const {isLoading, isError, error, data: movie} = useQuery(
    `movie-${id}`,
    () => movieDBInstance.request(movieDBEndpoints.getDetails(id)),
    {
      enabled,
      onError: () => {
        setEnabled(false);
      },
    },
  );

  const {
    isSuccess: isImagesSuccess,
    data: images,
  } = useQuery(
    `movie-images-${id}`,
    () => movieDBInstance.request(movieDBEndpoints.getImages(id)),
    {enabled},
  );

  const {
    isSuccess: isVideosSuccess,
    data: videos,
  } = useQuery(
    `movie-videos-${id}`,
    () => movieDBInstance.request(movieDBEndpoints.getVideos(id)),
    {enabled},
  );

  const {
    isSuccess: isCreditsSuccess,
    data: credits,
  } = useQuery(
    `movie-credits-${id}`,
    () => movieDBInstance.request(movieDBEndpoints.getCredits(id)),
    {enabled},
  );

  return (
    <Scene
      isLoading={isLoading}
      isError={isError}
      error={error}
      onRetry={() => {
        setEnabled(true);
      }}>
      <ImageHeaderScrollView
        maxHeight={screenHeight * 0.5}
        minHeight={headerHeight}
        maxOverlayOpacity={1}
        minOverlayOpacity={0}
        scrollViewBackgroundColor={theme.colors.background}
        fadeOutForeground
        disableHeaderGrow={false}
        showsVerticalScrollIndicator={false}
        renderHeader={() => (
          <CacheImageBackground
            style={{
              height: screenHeight * 0.5,
              width: screenWidth,
            }}
            uri={movieDBImagesModule.getImageUrl(
              movieDBImagesModule.getImageWidth(screenWidth),
              movie?.data?.backdrop_path,
            )}>
            <View style={styles.foreground}>
              <Quote>{movie?.data?.release_date.substring(0, 4)}</Quote>
              <Headline>{movie?.data?.title}</Headline>
            </View>
          </CacheImageBackground>
        )}>
        <TriggeringView>
          <HorizontalDivider />
          <View style={[styles.row, styles.ratingContainer]}>
            <View style={styles.ratingElement}>
              <Title>
                {movie?.data?.vote_average}
                <Label>/10</Label>
              </Title>
              <Label>
                {movie?.data?.vote_count} {t(translations.REVIEWS)}
              </Label>
            </View>
          </View>
          <HorizontalDivider />
          <View style={styles.content}>
            {DeviceInfo.isTablet() ? (
              <MovieInfoTablet movie={movie?.data} />
            ) : (
              <MovieInfoPhone movie={movie?.data} />
            )}
            {isImagesSuccess &&
              (images.data.backdrops.length > 0 ||
                images.data.posters.length > 0) && (
                <>
                  <Subtitle style={globalStyles.verticalSpacing}>
                    {t(translations.IMAGES)}
                  </Subtitle>
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={globalStyles.verticalSpacing}
                    data={[...images.data.backdrops, ...images.data.posters]}
                    ItemSeparatorComponent={HorizontalSeparator}
                    renderItem={({item: image}) => <ImageItem image={image} />}
                    keyExtractor={(item) => item.filePath}
                  />
                </>
              )}
            {isVideosSuccess && videos.data.results.length > 0 && (
              <>
                <Subtitle style={globalStyles.verticalSpacing}>
                  {t(translations.VIDEOS)}
                </Subtitle>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={globalStyles.verticalSpacing}
                  data={videos.data.results}
                  ItemSeparatorComponent={HorizontalSeparator}
                  renderItem={({item: video}) => <VideoItem video={video} />}
                  keyExtractor={(item) => `${item.id}-${item.key}`}
                />
              </>
            )}
            {isCreditsSuccess && (
              <>
                {credits.data.cast.length > 0 && (
                  <>
                    <Subtitle style={globalStyles.verticalSpacing}>
                      {t(translations.THE_CAST)}
                    </Subtitle>
                    <FlatList
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      style={globalStyles.verticalSpacing}
                      data={credits.data.cast}
                      ItemSeparatorComponent={HorizontalSeparator}
                      renderItem={({item: cast}) => <CastItem cast={cast} />}
                      keyExtractor={(item) => `${item.id}-${item.cast_id}`}
                    />
                  </>
                )}
                {credits.data.crew.length > 0 && (
                  <>
                    <Subtitle style={globalStyles.verticalSpacing}>
                      {t(translations.THE_CREW)}
                    </Subtitle>
                    <FlatList
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      style={globalStyles.verticalSpacing}
                      data={credits.data.crew}
                      ItemSeparatorComponent={HorizontalSeparator}
                      renderItem={({item: crew}) => <CrewItem crew={crew} />}
                      keyExtractor={(item) => `${item.id}-${item.credit_id}`}
                    />
                  </>
                )}
              </>
            )}
          </View>
        </TriggeringView>
      </ImageHeaderScrollView>
    </Scene>
  );
};

MovieDetail.propTypes = {};

export default MovieDetail;
