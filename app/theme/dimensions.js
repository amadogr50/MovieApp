/**
 * Standard values to be used in margins, paddings or spacing in general.
 */
import normalize from 'react-native-normalize';
import DeviceInfo from 'react-native-device-info';

const dimensions = {
  xxs: DeviceInfo.isTablet() ? normalize(3) : normalize(4),
  xs: DeviceInfo.isTablet() ? normalize(6) : normalize(8),
  s: DeviceInfo.isTablet() ? normalize(12) : normalize(16),
  m: DeviceInfo.isTablet() ? normalize(18) : normalize(24),
  l: DeviceInfo.isTablet() ? normalize(24) : normalize(32),
  xl: DeviceInfo.isTablet() ? normalize(36) : normalize(48),
  xxl: DeviceInfo.isTablet() ? normalize(72) : normalize(96),
};

export default dimensions;
