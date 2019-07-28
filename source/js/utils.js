// Рендеринг элемента из разметки
const renderElement = (string) => {
  const div = document.createElement(`div`);
  div.innerHTML = string;
  return div.firstChild;
};
