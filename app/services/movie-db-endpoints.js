const getPopular = (page) => ({
  method: 'GET',
  url: 'movie/popular',
  params: {
    page,
  },
});

const getDetails = (movieId) => ({
  method: 'GET',
  url: `movie/${movieId}`,
});

const getCredits = (movieId) => ({
  method: 'GET',
  url: `movie/${movieId}/credits`,
});

const getVideos = (movieId) => ({
  method: 'GET',
  url: `movie/${movieId}/videos`,
});

const getImages = (movieId) => ({
  method: 'GET',
  url: `movie/${movieId}/images`,
});

const movieDBEndpoints = {
  getPopular,
  getDetails,
  getCredits,
  getVideos,
  getImages,
};

export default movieDBEndpoints;
