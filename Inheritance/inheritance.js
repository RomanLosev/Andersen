//1. Есть объект a с набором свойств, объект b должен унаследовать свойства a  

function Car (name) {
    
  this.name = name;
    
  this.year = 2015;
  this.info = function () {
   alert ("Имя: " + this.name + "; Год производства: " + this.year); 
} 
 
}   
   


var car = new Car("Honda");

function Cabriolet (name) {
    
  this.name = name;

}

   Cabriolet.prototype = car;

   white = new Cabriolet ("Mersedes");
   
   black = new Cabriolet ("BMW");

   alert (white.year);

   white.info();


