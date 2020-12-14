const getThumbnailUrl = (videoId) => {
  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
};

const getVideoUrl = (videoId) => {
  return `https://www.youtube.com/watch?v=${videoId}`;
};

const youtubeApiModule = {
  getThumbnailUrl,
  getVideoUrl,
};

export default youtubeApiModule;
