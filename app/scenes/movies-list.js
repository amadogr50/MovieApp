import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {usePaginatedQuery} from 'react-query';
import movieDBInstance from '../services/movie-db-instance';
import movieDBEndpoints from '../services/movie-db-endpoints';
import movieDBImagesModule from '../modules/movie-db-images-module';
import dimensions from '../theme/dimensions';
import {MovieItem} from '../components';
import ROUTES from '../navigation/routes';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    margin: dimensions.xxs,
  },
});

const MoviesList = ({navigation}) => {
  const windowWidth = useWindowDimensions().width;
  const imageWidth = movieDBImagesModule.getImageWidth(windowWidth);

  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const getPopular = (key, currentPage = 1) =>
    movieDBInstance.request(movieDBEndpoints.getPopular(currentPage));

  const onSuccess = (data) => {
    setMovies([...movies, ...data.data.results]);
  };

  const {isLoading, isError} = usePaginatedQuery(['movies', page], getPopular, {
    onSuccess,
  });

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
    <View>
      {isLoading ? (
        <Text>Loading</Text>
      ) : isError ? (
        <Text>Error</Text>
      ) : (
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          onEndReached={onEndReached}
          numColumns={3}
        />
      )}
    </View>
  );
};

MoviesList.propTypes = {};

export default MoviesList;
