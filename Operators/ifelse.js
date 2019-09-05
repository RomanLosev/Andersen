let year = prompt('Сколько лет длилась 30-летняя война?', '');

if (year < 30) {
  alert( 'Слишком мало' );
} else if (year > 30) {
  alert( 'Это много' );
} else {
  alert( 'Правильный ответ, молодец!' );
}


let nameJS = prompt('Какое «официальное» название JavaScript?', '');

if (nameJS == 'ECMAScript') {
  alert( 'Верно!' ); }
  else {
  alert( 'Не знаете? ECMAScript!' );
}


let number = prompt('Введителюбое целое число', '');

if (number < 0) {
  alert( -1 );
} else if (number == 0) {
  alert( 0 );
} else {
  alert( 1 );
}


let result = prompt('Сколько будет 2+2', '');

let message = (result < 4) ? 'Мало' :
  (result > 4) ? 'Много' :
  'Правильно!';

alert( message );


//result = (a + b < 4) ? 'Мало' : 'Много';


let login = prompt('Введите login', '');

let mes = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';

alert( mes );



