const assert = require('assert');
Feature('LikingRestoran');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const ContentNotFound = 'Data tidak ditemukan';

Scenario('showing empty liked restoran', ({ I }) => {
  I.seeElement('.content_not_found');
  I.see(ContentNotFound, '.content_not_found');
});

Scenario('liking one restoran', async ({ I }) => {
  I.see(ContentNotFound, '.content_not_found');
  I.amOnPage('/');

  I.seeElement('#produk');
  const firstRestoran = locate('#judul-restoran a').first();
  const firstRestoranTitle = await I.grabTextFrom(firstRestoran);
  I.click(firstRestoran);

  I.seeElement('#main-content');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#judul-restoran a');
  const likedRestoranTitle = await I.grabTextFrom('#judul-restoran a');

  assert.strictEqual(firstRestoranTitle, likedRestoranTitle);

});

Scenario('unliking one restoran', async ({ I }) => {
  I.see(ContentNotFound, '.content_not_found');

  I.amOnPage('/');

  I.seeElement('#produk');
  const firstRestoran = locate('#judul-restoran a').first();
  const firstRestoranTitle = await I.grabTextFrom(firstRestoran);
  I.click(firstRestoran);

  I.seeElement('#main-content');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#judul-restoran a');
  const likedRestoranTitle = await I.grabTextFrom('#judul-restoran a');
  assert.strictEqual(firstRestoranTitle, likedRestoranTitle);

  // mengklik card restaurant yg ada di fav
  I.click(likedRestoranTitle);

  // mengunlike restaurant yang ada di fav
  I.seeElement('#main-content');
  I.click('#likeButton');

  // kembali ke halaman fav
  I.amOnPage('/#/favorite');
  I.seeElement('#main-content');
  const noFavRestaurant = await I.grabTextFrom('.content_not_found');

  // mencek halaman fav dan berhasil menghapus (unlike)
  assert.strictEqual(noFavRestaurant, ContentNotFound);
});