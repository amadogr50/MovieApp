import {useEffect, useState} from 'react';
import * as shorthash from 'shorthash';
import * as RNFS from 'react-native-fs';

const useImageCaching = (uri) => {
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

  return {
    source,
  };
};

export default useImageCaching;
