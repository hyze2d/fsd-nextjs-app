import { createApiRoute } from './request';
import { restore } from 'effector';

const a = createApiRoute<
  { a: number },
  { id: number; content: string },
  never,
  { page: number; limit: number }
>(dto => ({
  url: '/post/',
  method: 'post',
  data: dto.data,
  params: {
    page: dto.query.page,
    limit: dto.query.limit
  }
}));

const $a = restore(a.doneData, { a: '1' });
