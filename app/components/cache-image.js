import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import * as shorthash from 'shorthash';
import * as RNFS from 'react-native-fs';

const CacheImage = ({uri, ...props}) => {
  const [source, setSource] = useState(null);

  useEffect(() => {
    (async () => {
      const name = shorthash.unique(uri);
      const path = `${RNFS.CachesDirectoryPath}${name}`;
      const image = await RNFS.exists(path);
      if (image.exists) {
        setSource({
          uri: image.uri,
        });
        return;
      }

      const newImage = await RNFS.downloadFile({
        fromUrl: uri,
        toFile: path,
      });

      setSource({
        uri: newImage.uri,
      });
    })();
  }, [uri]);

  return <Image source={source} {...props} />;
};

CacheImage.propTypes = {};

export default CacheImage;
