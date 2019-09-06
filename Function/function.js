//1, Функция сложения двух чисел

function sum (a,b) {
  
return a+b;

}

alert (sum(4,7));

//2. Фнукция опредления имени(если имя  ваше, то привет + имя)

function userName() {
   
let name = prompt('Напишите Ваше имя', " "); 
   
if (name == "Roman"){

alert (`Hello, ${name}!`)

} 

}

userName()


//3. Функция вычисления типа аргумента и вывод в консоль

function typeOfArgument(arg) {
   

alert (typeof (arg));   

} 


typeOfArgument(4);

//4. Функция выбора четных элементов массива(возвращает новый массив)

let array = [1,2,3,4,5,6];


function evenMas(arr) {

  
let newArray = [];

  
for (let i=0; i<arr.length;i++){
    
if (arr[i] % 2 == 0)
    
{
      
newArray.push(arr[i]);
    
}
  
}

return newArray;

}
alert(evenMas(array));

//Перепишите функцию, используя оператор '?' или '||'

//function checkAge(age) {
//return age > 18 ? true : confirm('Родители разрешили?');
//}

//function checkAge(age) {
//  return (age > 18) || confirm('Родители разрешили?');
//}


//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min(a,b) {
 
if (a<b) 
{
 return a;
  
} else 
{
return b;
  
}
} 

alert (min(4,1));


//Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

function pow(x,n) {
 

return a = x ** n;
  
}


let x = prompt("введите x", ' ');
let n = prompt("введите n", ' ');

if (n < 1) {
  alert(`Введите натуральное, целое значение от 1 и выше`);
} else {
  alert( pow(x,n) );
}

