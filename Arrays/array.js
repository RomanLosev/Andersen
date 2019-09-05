
//1. Перебор массива с выводом в консоль кажого элемента

let arr = [1,2,3,4,5];
for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}

//2. Перобразовать массив в строку и обртано в массив 

let mas = [1,2,3,4,5];
let str = String(mas);
  alert(str);

let array = str.split(",");
  for (let a = 0; a < array.length; a++) {
  alert( array[a] );
}


//3. Добавить к каждому элементу массива слова hello 

let mass = [1,2,3,4,5];
  for (let y = 0; y < mass.length; y++) {
   mass[y] = mass[y] + "hello";
   alert( mass[y] );
}


//4. Преобразовать числовой массив в boolean


let massive = [1,2,3,4,5];
let value = Boolean(massive);
{
  alert( value );
}


//Создайте массив styles с элементами «Джаз» и «Блюз».

let styles = ["Джаз", "Блюз"];

//Добавьте «Рок-н-ролл» в конец.

styles.push("Рок-н-роллн");

//Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.

styles[1] = "Классика";

//Удалите первый элемент массива и покажите его.

alert( styles.shift() );

//Вставьте «Рэп» и «Регги» в начало массива.

styles.unshift("Рэп", "Рэгги");

alert (styles);

