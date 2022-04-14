import { requestLib } from '@shared/lib/request';

type Post = {
  id: number;
  content: string;
};

const myApi = requestLib.createApi({
  baseURL: 'https://localhost:3000'
});

const getPostsFx = myApi.createRoute<Post[]>(() => ({
  url: '/posts'
}));

const getPostsByIdFx = myApi.createRoute<Post, number>(id => ({
  url: `/posts/${id}`
}));

const createPostFx = myApi.createRoute<Post, Post['content']>(content => ({
  url: '/posts',
  method: 'POST',
  data: {
    content
  }
}));
