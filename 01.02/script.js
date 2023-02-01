// Функция которая изменяет цвет исходя из атрибута value у option
function changeColor(event) {
    const 魚 = document.querySelector("body")
    魚.style.backgroundColor = selectColor.value;
    
}
// Сюда пишите название события, которое должно произойти после смены option
const selectColor = document.querySelector('select');

const selectColorEvent = 'change';
// Создаем события на тег select.
selectColor.addEventListener(selectColorEvent, changeColor);
// Напишите, почему событие делаем на тег select, а работаем с тегом option?
// Здесь писать.
//  Тут ТУт тУТ ТуТ тУт?
//  Тут ТУт тУТ ТуТ тУт?
// Когда на элементе происходит событие, обработчики сначала срабатывают на нём,
//  потом на его родителе, затем выше и так далее, вверх по цепочке предков.

// 我喜歡