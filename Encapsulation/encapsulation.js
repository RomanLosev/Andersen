//1. Реализовать инкапсуляцию 

function Car (name, year) {
    
  this.name = name;
    
  var _year = year;
    
   
  this.getYear = function() {
        
    return _year;
    
  }
    
  this.setYear = function(year) {
        
    if(typeof year === "number" && year > 2010 && year <= 2019){
            
     _year = year;
        
    } 
    else {
            
      alert("В этом году машина не производилась");
        
    }
    
  }

}
 


var honda = new Car("Honda", 2015);
alert(honda.getYear()); 

honda.setYear(2010);

alert(honda.getYear()); 

//
class Person {
 
 
  
  constructor(name, age) {
    
   this.name = name;
    
   this.age = age;
  
  }

  

  set age(age) {
    
    if (age > 0 && age < 100) {
      
     this._age = age;

}
    
    else {
       
      alert ("Введите ваш возраст");     
     
  
  
  }

}
  

  get age() {
    
    return this._age;
  
  }


}



let person = new Person("Roman", 800);

