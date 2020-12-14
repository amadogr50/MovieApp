import React from 'react';
import {View, StyleSheet} from 'react-native';
import theme from '../theme/theme';

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    backgroundColor: theme.colors.divider,
    height: 1,
  },
});

const HorizontalDivider = (style) => {
  return <View style={[styles.divider, style]} />;
};

export default HorizontalDivider;
