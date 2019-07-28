`use strict`;

const petDetailsModal = document.querySelector(`.modal-pet`);
const closeBtn = petDetailsModal.querySelector(`.modal__close`);

// Закрытие окна описания животного
const closeDetailsModal = () => {
  closeBtn.removeEventListener(`click`, closeBtnClickHandler);
  petDetailsModal.classList.remove(`show`);
};

// Обработчик клика по кнопке закрытия модалки
const closeBtnClickHandler = (evt) => {
  evt.preventDefault();
  closeDetailsModal();
};

// Генерация списка описания животного
const getPetParams = (data, block) => {
  return false;
};

// Открытие окна с описанием животного
const openDetailsModal = (petObj) => {
  // Заполняем окно данными
  petDetailsModal.querySelector(`.pet-image`).src = `img/animal-1-card.jpg`;
  petDetailsModal.querySelector(`.pet-image`).alt = `${petObj.petname} the ${petObj.pet}` || `Pet photo`;
  petDetailsModal.querySelector(`.pet-image`).title = petObj.petname || `Unknown`;
  petDetailsModal.querySelector(`.pet__name`).textContent = petObj.petname || `Unknown`;
  petDetailsModal.querySelector(`.pet__breed`).textContent = petObj.breed || `Unknown`;
  petDetailsModal.querySelector(`.pet__text`).textContent = petObj.description || ``;
  let petRecordsEl = petDetailsModal.querySelector(`.pet__params`);
  petRecordsEl.innerHTML = `No data`;
  // getPetParams(petObj, petRecordsEl) ||

  // Добавляем обработчик на кнопку закрытия
  closeBtn.addEventListener(`click`, closeBtnClickHandler);
  // Открываем окно
  petDetailsModal.classList.add(`show`);
};
