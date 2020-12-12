const IMAGE_WIDTHS = [92, 154, 185, 342, 500, 780];

const getImageWidth = (width) => {
  return IMAGE_WIDTHS.find((w) => w >= width) || 'original';
};

const getImageUrl = (width, imagePath) => {
  return `https://image.tmdb.org/t/p/w${width}${imagePath}`;
};

const movieDBImagesModule = {
  getImageWidth,
  getImageUrl,
};

export default movieDBImagesModule;
