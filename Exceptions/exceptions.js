//1. Завернуть в try catch 1/0 и вывести на ноль делить нельзя 
 

   try {

  
let result = 1/0;
  
   
  if (result == Infinity) {
   
  throw new Error ("На ноль делить нельзя!");

  }
 
} 
   catch (e) {
  
  
  alert( 'Error: ' + e.message);
  

}

// или

   try {

   
let result = function(a,b) {

    
    if (b == 0) {
   
     throw new Error ("На ноль делить нельзя!");
    
    }   else {return a/b} ;   
  
   }  
      
     alert (result(15,0));
 


}   catch (e) {
  
  
   alert( 'Error: ' + e.message);

}