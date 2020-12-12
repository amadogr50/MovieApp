const getPopular = (page) => ({
  method: 'GET',
  url: 'movie/popular',
  params: {
    page,
  },
});

const movieDBEndpoints = {
  getPopular,
};

export default movieDBEndpoints;
