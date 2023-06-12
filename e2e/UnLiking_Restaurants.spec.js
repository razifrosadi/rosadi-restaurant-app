/* eslint-disable no-undef */
Feature('UnLiking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Menghilangkan Restaurant Dari Tampilan Favorit', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant__title a');
  const firstRestaurant = locate('.restaurant__title a').first();
  
  I.click(firstRestaurant);
  I.wait(5);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');

  I.click(likedRestaurantTitle);
  I.wait(5);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
