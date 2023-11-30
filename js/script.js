//меняем класс 
listNode.className = "lala";
//к классу добавляется новый класс рядом, главное не забыть пробел 
listNode.className += " lala";
//
listNode.classList;

// add, remove, contains, toggle, replace

// добавляет класс ul
listNode.classList.add("ul");

//удаляет
listNode.classList.remove("list");

// есть ли какой класс или нет, возвращает булевый
listNode.classList.contains("list");

// заменяет один класс на другой
listNode.classList.replace("list", "super__list");

//принимает 1 параметр, если класс опенд есть он его удалить, если его нет то он его добавит
listNode.classList.toggle("opened");

