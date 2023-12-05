import { emojies } from "./emojies.js";
let input = document.querySelector(".input");

function search() {
  let inputValue = input.value;
  emojies.filter((el) => {
    // let check = el.title.includes(inputValue);
  });
}

input.addEventListener("input", search);

// function render() {}

// function search(ev) {
//   let inputValue = input.value;
//   emojies.forEach((el) => {
//     let emTitle = el.title;
//     console.log(emTitle);
//   });

//   if (emTitle.includes(inputValue)) {
//     console.log("есть");
//   }
// }

// input.addEventListener("input", search);
// ____
// input.addEventListener("input", function () {
//   let search = input.value.toLowerCase();
//   emojies.filter((el) => {
//     const cardText = el.title.toLowerCase();
//     if (cardText.includes(search)) {
//       el.style.display = "block";
//     } else {
//       el.style.display = "none";
//     }
//   });
// });




// _________________________________________________________
// НИЖЕ ПЕРЕБОР

// перебираем массив и параметром принимаем все объекты этого массива
// вытаскиваем обертку карточек
// суем в начало обертки функцию с разметками карточек, параметром берем каждый объект
let wrapper = document.querySelector(".finder__wrapper");

emojies.forEach((obj) => {
  wrapper.append(createCard(obj));
});

// вытаскиваем карточку и все элементы карточки
// задаем им классы
// присваиваем каждому элементу ключ объекта
// суем все элементы карточки в саму карточку
// на выходе возвращаем карточку
function createCard(obj) {
  let card = document.createElement("div");
  let emojie = document.createElement("span");
  let name = document.createElement("h2");
  let info = document.createElement("p");

  card.className = "finder__box";
  emojie.className = "finder__img";
  name.className = "finder__emoji__name";
  info.className = "finder__emoji__info";

  emojie.textContent = obj.symbol;
  name.textContent = obj.title;
  info.textContent = obj.keywords;

  card.append(emojie, name, info);
  return card;
}
// итого: в функции создания карточкм создается только одна карточка, мы ее параметром передаем
// в функцию перебора массива и суем в обертку, и карточки создвются перебором
