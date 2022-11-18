import config from './config';

const API_ENDPOINT = {
  LIST: `${config.BASE_URL}/list`,
  DETAIL: (id) => `${config.BASE_URL}/detail/${id}`,
};

export default API_ENDPOINT;
