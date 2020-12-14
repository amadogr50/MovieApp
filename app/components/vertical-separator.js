import React from 'react';
import {View, StyleSheet} from 'react-native';
import dimensions from '../theme/dimensions';

const styles = StyleSheet.create({
  separator: {
    height: dimensions.s,
  },
});

const VerticalSeparator = () => {
  return <View style={styles.separator} />;
};

VerticalSeparator.propTypes = {};

export default VerticalSeparator;
