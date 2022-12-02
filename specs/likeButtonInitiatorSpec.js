import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

describe('Like Button', () => {
  it('should show the like button when the movie has not been liked before', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran: {
        id: 'rqdv5juczeskfw1e867',
      },
    });
  expect(document.querySelector('[aria-label="like this restoran"]')).toBeTruthy();
  });
});
