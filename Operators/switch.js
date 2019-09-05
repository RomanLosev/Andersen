let browser = prompt('Какой браузер Вы используете?', '');

if (browser == 'Edge') {
  alert( 'Вы используете Edge!' );
} else if (browser == 'Chrome') {
  alert( 'Отлично, мы поддерживаем этот браузер' );
} else if (browser == 'Firefox') {
  alert( 'Отлично, мы поддерживаем этот браузер' );
} else if (browser == 'Safari') {
  alert( 'Отлично, мы поддерживаем этот браузер' );
} else if (browser == 'Opera') {
  alert( 'Отлично, мы поддерживаем этот браузер' );
//можно перечислить через ||
} else {
  alert( 'Мы надеемся, что эта страница отображается хорошо!' );
}



let number = +prompt("Введите число между 0 и 3", '');
switch (number) {
  case 0:
    alert( 'Вы ввели число 0' );
    break;

  case 1:
    alert( 'Вы ввели число 1' );
    break;

  case 2:
  case 3:
    alert( 'Вы ввели число 2, а может и 3' );
    break;
}