import axios from 'axios';
import {MOVIE_DB_API_KEY} from '@env';
import * as RNLocalize from 'react-native-localize';

const movieDBInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: MOVIE_DB_API_KEY,
    language: RNLocalize.getLocales()[0].languageCode,
  },
});

export default movieDBInstance;
