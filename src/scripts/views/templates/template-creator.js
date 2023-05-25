import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
<h2 class="resto__title">${resto.restaurant.name}</h2>
<img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL}large/${resto.restaurant.pictureId}" crossorigin="anonymous" />
<div class="resto__info">
  <h3>Information</h3>
  <h4>Rating</h4>
  <p>${resto.restaurant.rating}</p>
  <h4>Description</h4>
  <p>${resto.restaurant.description}</p>
  <h4>Address</h4>
  <p>${resto.restaurant.address}</p>
  <h4>City</h4>
  <p>${resto.restaurant.city}</p>
</div>
<div class="resto__overview">
  <h3>Overview</h3>
  <p>${resto.restaurant.categories.map((category) => category.name)}</p>
  <table>
  <thead>
      <tr>
          <th scope="col">Makanan</th>
          <th scope="col">Minuman</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>${resto.restaurant.menus.foods.map((food) => food.name)}</td>
          <td>${resto.restaurant.menus.drinks.map((drink) => drink.name)}</td>
      </tr>
  </tbody>
  </table>
</div>

    <div class="resto__overview">
        <class class="content__label" id="main-content">Reviewer</class>
        <div id="detailRestaurant"></div>
    </div>

    <div class="resto__info">
        ${resto.restaurant.customerReviews.map((customerReview) => `
            <h4>Rating</h4>
            <p>${resto.restaurant.rating}</p>
            <h2>${customerReview.name}</h2>
            <p>${customerReview.review}</p>
            <p>${customerReview.date}</p>
        `).join('')}
    </div>


`;

const createRestoItemTemplate = (resto) => `
<div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster" alt="${resto.name}"
           src="${CONFIG.BASE_IMAGE_URL}small/${resto.pictureId}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
      <p>${resto.city}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
