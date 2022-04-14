import axios, { AxiosRequestConfig } from 'axios';
import { createEffect } from 'effector';

const defaultInstance = axios.create();

const baseRequestFx = createEffect(
  async <Dto, Contract>(config: AxiosRequestConfig<Dto>): Promise<Contract> => {
    const data = await defaultInstance.request(config);

    return data.data;
  }
);

export { baseRequestFx };
