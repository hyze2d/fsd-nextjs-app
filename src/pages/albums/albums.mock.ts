const albumsMock = [
  {
    id: 1,
    title: 'Some title',
    description:
      'lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum ',
    thumbnail: 'https://picsum.photos/200'
  },
  {
    id: 2,
    title: 'Some titld2',
    description:
      'lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum ',
    thumbnail: 'https://picsum.photos/202'
  },

  {
    id: 3,
    title: 'Some title3',
    description:
      'lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum ',
    thumbnail: 'https://picsum.photos/204'
  },

  {
    id: 4,
    title: 'Some title4',
    description:
      'lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum ',
    thumbnail: 'https://picsum.photos/206'
  },

  {
    id: 5,
    title: 'Some title5',
    description:
      'lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum ',
    thumbnail: 'https://picsum.photos/208'
  },

  {
    id: 6,
    title: 'Some title6',
    description:
      'lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum ',
    thumbnail: 'https://picsum.photos/210'
  },

  {
    id: 7,
    title: 'Some title7',
    description:
      'lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum ',
    thumbnail: 'https://picsum.photos/212'
  }
].map(item => ({
  ...item,
  id: item.id + 8,
  title: `${item.title}ON ALBUMS PAGE`,
  thumbnail: item.thumbnail.replace('2', '3')
}));

export { albumsMock };
