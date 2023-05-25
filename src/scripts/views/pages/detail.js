import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <div id="resto" class="resto"></div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestaurantDbSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriterestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        rating: resto.restaurant.rating,
        city: resto.restaurant.city,
        pictureId: resto.restaurant.pictureId,
      },
    });
  },
};

export default Detail;
