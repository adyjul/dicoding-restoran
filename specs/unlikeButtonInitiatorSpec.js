import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestoranDB from '../src/scripts/data/data-favorite';

describe('Unlike Button Initiator', () =>{
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoranDB.putRestoran({ id: 'rqdv5juczeskfw1e867' });
  });

  afterEach(async () => {
    await FavoriteRestoranDB.deleteRestoran('rqdv5juczeskfw1e867');
  });

  it('display unlike widget when the restoran has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran: {
        id: 'rqdv5juczeskfw1e867',
      },
    });
    expect(document.querySelector('[aria-label="unlike this restoran"]')).toBeTruthy();
  });

  it('should not display like widget when the restoran has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran: {
        id: 'rqdv5juczeskfw1e867',
      },
    });

    expect(document.querySelector('[aria-label="like this restoran"]'))
      .toBeFalsy();
  });

  it('should be able to remove liked restoran from the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran: {
        id: 'rqdv5juczeskfw1e867',
      },
    });
    document.querySelector('[aria-label="unlike this restoran"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoranDB.getAllRestoran()).toEqual([]);
  });

  it('should not throw error if the unliked restoran is not in the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran: {
        id: 'rqdv5juczeskfw1e867',
      },
    });
    await FavoriteRestoranDB.deleteRestoran('rqdv5juczeskfw1e867');
    document.querySelector('[aria-label="unlike this restoran"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoranDB.getAllRestoran()).toEqual([]);
  });

});