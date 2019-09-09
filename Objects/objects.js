//1. Создать объект, добавить к нему свойство
//2. Изменить свойство объекта 
//3. Сделать свойство объекта функцией сложения двух чисел

let car = {     
  
  name: "BMW",  
  
  maxSpeed: 230,

};
 

  
  alert (car.name);
  
  car.name = "Honda";
  
  alert (car.name);



  car.maxWeight = function(a,b) {
 
   return a+b;

  };



   alert (car.maxWeight(3,4)); 
 

//Напишите код, выполнив задание из каждого пункта отдельной строкой:
//Создайте пустой объект user.
//Добавьте свойство name со значением John.
//Добавьте свойство surname со значением Smith.
//Измените значение свойства name на Pete.
//Удалите свойство name из объекта.

let user = {};
user.name = "John";
 
user.surname = "Smith";
 
user.name = "Pete";
 
delete user.name;


//Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false

function isEmpty(obj) {

  for (let key in obj) {
return false;
    
}
   
return true;
  
}


//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum

 let salaries = {
  
   John: 100,
  
   Ann: 160,
  
   Pete: 130,

}
  
 
   let sum = 0;

    for (let key in salaries) {

     sum = sum + salaries[key];
    

}
   
  
   alert (sum);

//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

function multiplyNumeric(obj) {

   for (let key in obj) {

     if (typeof obj[key] == 'number') {
 
      obj[key] *= 2;
      
}
    
}
  
}


