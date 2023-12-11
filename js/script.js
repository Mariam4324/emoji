import { emojies } from "./emojies.js";
let input = document.querySelector(".input");
let wrapper = document.querySelector(".finder__wrapper");

// function deleteDublicates(arr) {
//   arr.map((el) => {
//     const keywordsArr = el.keywords.split(" ");
//     const unicValuesArr = [...new Set(keywordsArr)];
//     const unicValuesString = unicValuesArr.join(" ");
//   });
// }
// deleteDublicates(emojies);

function deleteDublicates(string) {
  const keywordsArr = string.split(" ");
  const unicValuesArr = [...new Set(keywordsArr)];
  const unicValuesString = unicValuesArr.join(" ");
  return unicValuesString;
}

// // перебираем массив и параметром принимаем все объекты этого массива
// // очищаем обертку карточек
// // суем в начало обертки функцию с разметками карточек, параметром берем каждый объект
// // а в саму функцию renderEmoji передаем параметром arr, а при вызове функции аргументов принимаем массив emojies
function renderEmoji(arr) {
  wrapper.innerHTML = ` `;

  arr.forEach((obj) => {
    wrapper.append(createCard(obj));
  });
}
// // вытаскиваем карточку и все элементы карточки
// // задаем им классы
// // присваиваем каждому элементу ключ объекта
// // суем все элементы карточки в саму карточку
// // на выходе возвращаем карточку

function createCard(obj) {
  const card = document.createElement("div");
  const emojie = document.createElement("span");
  const name = document.createElement("h2");
  const info = document.createElement("p");

  card.className = "finder__box";
  emojie.className = "finder__img";
  name.className = "finder__emoji__name";
  info.className = "finder__emoji__info";

  emojie.textContent = obj.symbol;
  name.textContent = obj.title;
  info.textContent = deleteDublicates(obj.keywords);
  card.append(emojie, name, info);

  return card;
}

// // ставим слушатель событий на функцию search и параметром передаем событие. Создаем inputValue равный целевому обьекту (самому инпуту), создаем переменную с фильтром по нужному условию  и передаем параметром эту переменную в функцию renderEmoji
function search(evt) {
  const inputValue = evt.target.value;
  const filter = emojies.filter(
    (el) =>
      el.title.toLowerCase().includes(inputValue.toLowerCase().trim()) ||
      el.keywords.toLowerCase().includes(inputValue.toLowerCase().trim())
  );

  renderEmoji(filter);
}

input.addEventListener("input", search);

renderEmoji(emojies);

// итого: в функции создания карточкм создается только одна карточка, мы ее параметром передаем
// в функцию перебора массива и суем в обертку, и карточки создвются перебором
