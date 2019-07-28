`use strict`;

// Контейнер для карточек
const contentBlock = document.querySelector(`.list__list`);

// Обработчик клика по блоку с карточками
const cardClickHandler = (evt) => {
  evt.preventDefault();
  const clickedElement = evt.currentTarget;
  const petId = clickedElement.dataset.petid;

  // Показываем модальное окно c подробным описанием животного
  openDetailsModal(pets[petId - 1]);
};

// Рендеринг карточки животного
const renderCard = (dataObj) => {
  const cardMarkup = `<li class="list__item card" data-petid="${dataObj.id}">
      <div class="card__wrap">
        <p class="card__img-wrap">
          <img class="card__img" src="img/${dataObj.img_small}" width="270" height="270" alt="${dataObj.petname} the ${dataObj.pet}">
        </p>
        <h3 class="card__title">${dataObj.petname}</h3>
        <a class="card__button button button--still" href="#" title="Click to get additional information">Learn More</a>
      </div>
    </li>`;
  return cardEl = renderElement(cardMarkup);
};

// Рендеринг списка карточек животных
const renderPets = (petsArray, amount, block) => {
  if (block.children.length > 0) {
    block.innerHTML = ``;
  }
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    let card = renderCard(petsArray[i]);
    card.addEventListener(`click`, cardClickHandler);
    fragment.appendChild(card);
    block.appendChild(fragment);
  }
};

renderPets(pets, 8, contentBlock);
