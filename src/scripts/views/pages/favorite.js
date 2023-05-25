import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Your Liked Restaurant</h2>
      <div id="restos" class="restos">
 
      </div>
    </div>
      `;
  },

  async afterRender() {
    const restos = await FavoriteRestaurantIdb.getAllRestaurants();
    const restosContainer = document.querySelector('#restos');
    
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Favorite;
