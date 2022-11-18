import { openDB } from 'idb';
import config from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = config;
const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestoranDB = {
  async getRestoran(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllRestoran() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putRestoran(movie) {
    return (await dbPromise).put(OBJECT_STORE_NAME, movie);
  },
  async deleteRestoran(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};
export default FavoriteRestoranDB;
