alert ( null || 2 || undefined ); //2

alert ( alert(1) || 2 || alert(3) ); //1, затем 2

alert ( 1 && null && 2 ); //null

alert ( alert(1) && alert(2) ); //1, затем undefined

alert ( null || 2 && 3 || 4 ); //3



let age = prompt('Ведите число', '');

if (age >=14 && age <=90) {
   alert ("Введенное число >=14 и <=90");
 } else { 
   alert ('Тоже неплохое число');
 }


//if (!(age >=14 && age <=90))
//if (age <14 || age >90) 

if (-1 || 0) alert( 'first' ); //выполнится, -1
if (-1 && 0) alert( 'second' ); //не выполнится
if (null || -1 && 1) alert( 'third' ); //выполнится, 1


let login = prompt('Введите login', '');

if (login == 'Админ') {
    let parol = prompt('Введите parol', '');
    if (parol == 'Я главный') {
    alert( 'Здравствуйте!' );
} else if (parol == '') {
  alert( 'Отменено' );
}  else {
  alert( 'Неверный пароль' );  
}}
   else if (login == '' || login == null) {
   alert( 'Отмена' );
}  else {
   alert( 'Я вас не знаю' );  
}     

