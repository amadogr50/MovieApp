import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {PulseIndicator} from 'react-native-indicators';
import theme from '../theme/theme';
import {Subtitle, Title} from '../typography';
import dimensions from '../theme/dimensions';

const styles = StyleSheet.create({
  container: {flex: 1},
  errorMessage: {
    marginBottom: dimensions.xl,
    textAlign: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: dimensions.s,
  },
});

const Scene = ({isLoading, isError, error, onRetry, children}) => {
  const getErrorMessage = () => {
    return error.message === 'Network Error'
      ? 'No internet connection, please connect'
      : 'An error occurred';
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <PulseIndicator color={theme.colors.text} />
      ) : isError ? (
        <View style={styles.errorContainer}>
          <Title style={styles.errorMessage}>{getErrorMessage()}</Title>
          <TouchableOpacity onPress={onRetry}>
            <Subtitle>Retry</Subtitle>
          </TouchableOpacity>
        </View>
      ) : (
        children
      )}
    </View>
  );
};

Scene.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Scene;
