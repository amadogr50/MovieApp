import {useEffect, useState} from 'react';
import * as shorthash from 'shorthash';
import * as RNFS from 'react-native-fs';

const imageExtensionExtractorRegex = /(?:\.([^.]+))?$/;

const useImageCaching = (remoteUri) => {
  const [source, setSource] = useState(null);

  useEffect(() => {
    (async () => {
      const name = shorthash.unique(remoteUri);
      const path = `${RNFS.CachesDirectoryPath}${name}${
        imageExtensionExtractorRegex.exec(remoteUri)[0]
      }`;
      const uri = `file:///${path}`;

      const image = await RNFS.exists(path);
      if (image.exists) {
        setSource({
          uri,
        });
        return;
      }

      await RNFS.downloadFile({
        fromUrl: remoteUri,
        toFile: path,
      }).promise;

      setSource({
        uri,
      });
    })();
  }, [remoteUri]);

  return {
    source,
  };
};

export default useImageCaching;
