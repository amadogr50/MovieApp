import React from 'react';
import {Linking, TouchableOpacity, View} from 'react-native';
import CacheImage from './cache-image';
import youtubeApiModule from '../modules/youtube-api-module';
import dimensions from '../theme/dimensions';
import {Body} from '../typography';
import {VideoPropTypes} from '../prop-types';
import reactotron from 'reactotron-react-native';

const VideoItem = ({video, ...props}) => {
  const onPress = async () => {
    try {
      await Linking.openURL(youtubeApiModule.getVideoUrl(video.key));
    } catch (e) {
      reactotron.error(e);
    }
  };

  return (
    <View {...props}>
      <TouchableOpacity onPress={onPress}>
        <CacheImage
          style={{
            height: 150,
            aspectRatio: 16 / 9,
            borderRadius: dimensions.xxs,
            marginBottom: dimensions.xs,
          }}
          source={{
            uri: youtubeApiModule.getThumbnailUrl(video.key),
          }}
        />
      </TouchableOpacity>
      <Body>{video.type}</Body>
    </View>
  );
};

VideoItem.propTypes = {
  video: VideoPropTypes,
};

export default VideoItem;
