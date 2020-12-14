import React from 'react';
import {View, StyleSheet} from 'react-native';
import dimensions from '../theme/dimensions';

const styles = StyleSheet.create({
  separator: {
    width: dimensions.s,
  },
});

const HorizontalSeparator = () => {
  return <View style={styles.separator} />;
};

HorizontalSeparator.propTypes = {};

export default HorizontalSeparator;
