import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {usePaginatedQuery} from 'react-query';
import movieDBInstance from '../services/movie-db-instance';
import movieDBEndpoints from '../services/movie-db-endpoints';
import movieDBImagesModule from '../modules/movie-db-images-module';
import dimensions from '../theme/dimensions';
import {MovieItem, Scene} from '../components';
import ROUTES from '../navigation/routes';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    margin: dimensions.xxs,
  },
});

const MoviesList = ({navigation}) => {
  const [enabled, setEnabled] = useState(true);

  const windowWidth = useWindowDimensions().width;
  const imageWidth = movieDBImagesModule.getImageWidth(
    windowWidth / DeviceInfo.isTablet() ? 5 : 3,
  );

  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const getPopular = (key, currentPage = 1) =>
    movieDBInstance.request(movieDBEndpoints.getPopular(currentPage));

  const onSuccess = (data) => {
    setMovies([...movies, ...data.data.results]);
  };

  const {isLoading, isError, error} = usePaginatedQuery(
    ['movies', page],
    getPopular,
    {
      enabled,
      onError: () => {
        setEnabled(false);
      },
      onSuccess,
    },
  );

  const renderItem = ({item: movie}) => {
    return (
      <MovieItem
        onPress={() => {
          navigation.navigate(ROUTES.MOVIE_DETAIL, {id: movie.id});
        }}
        style={styles.image}
        movie={movie}
        width={imageWidth}
      />
    );
  };

  const keyExtractor = (item) => item.id;

  const onEndReached = () => {
    setPage(page + 1);
  };

  return (
    <SafeAreaView
      isLoading={isLoading}
      isError={isError}
      error={error}
      onRetry={() => {
        setEnabled(true);
      }}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={onEndReached}
        showsVerticalScrollIndicator={false}
        numColumns={DeviceInfo.isTablet() ? 5 : 3}
      />
    </SafeAreaView>
  );
};

MoviesList.propTypes = {};

export default MoviesList;
