import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="restaurant__title">${restaurant.name}</h2>
<img class="lazyload restaurant__poster" data-src="${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}" alt="${restaurant.name}" />
<div class="restaurant__info">
  <h3>Information</h3>
  <h4>Rating</h4>
  <p>${restaurant.rating}</p>
  <h4>Description</h4>
  <p>${restaurant.description}</p>
  <h4>Address</h4>
  <p>${restaurant.address}</p>
  <h4>City</h4>
  <p>${restaurant.city}</p>
</div>
<div class="restaurant__overview">
  <h3>Overview</h3>
  <p>${restaurant.categories.map((category) => category.name)}</p>
  <table>
  <thead>
      <tr>
          <th scope="col">Makanan</th>
          <th scope="col">Minuman</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>${restaurant.menus.foods.map((food) => food.name)}</td>
          <td>${restaurant.menus.drinks.map((drink) => drink.name)}</td>
      </tr>
  </tbody>
  </table>
</div>

    <div class="restaurant__overview">
        <class class="content__label" id="main-content">Reviewer</class>
        <div id="detailRestaurant"></div>
    </div>

    <div class="restaurant__info">
        ${restaurant.customerReviews.map((customerReview) => `
            <h4>Rating</h4>
            <p>${restaurant.rating}</p>
            <h2>${customerReview.name}</h2>
            <p>${customerReview.review}</p>
            <p>${customerReview.date}</p>
        `).join('')}
    </div>


`;

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="lazyload restaurant-item__header__poster" alt="${restaurant.name || '-'}"
           data-src="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}" alt="${restaurant.name}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating || '-'}</span></p>
      </div>
      <div class="restaurant-item__header__city">
      <p><span class="restaurant-item__header__rating__score">${restaurant.city}</span></p>
    </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a></h3>
      <p>${restaurant.description || '-'}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
