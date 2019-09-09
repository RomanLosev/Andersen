//1. Получить текущую дату, вывести в консоль

let now = new Date();
alert (now); 

//2. Получить день, месяц и год текущей даты и по отдельности вывести в консоль

let date = new Date();

alert (date.getDate());

alert (date.getMonth());

alert (date.getFullYear());


//Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

let date1 = new Date(2012, 1, 20, 3, 12);
alert (date1);


//Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: 
//«ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}

  let date2 = new Date(2019, 8, 9); 
  alert( getWeekDay(date2) ); 


//Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

function getLocalDay(date) {
  let days = ['7', '1', '2', '3', '4', '5', '6'];

  return days[date.getDay()];
}

let date3 = new Date(2019, 8, 9); 
alert( getLocalDay(date) );


//Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

 alert (getLastDayOfMonth(2019, 9));

//Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

function getSecondsToday() {
  let date = new Date();
  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

 alert (getSecondsToday());


//Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

function getSecondsToTomorrow() {
  let now = new Date();

  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  let different = tomorrow - now;
  return Math.round(different / 1000);
}

   alert (getSecondsToTomorrow());



