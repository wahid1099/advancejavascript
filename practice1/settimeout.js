console.log("Hi im parent");
//  setTimeout(console.log('hi im from set time out '),3000);
setTimeout(function(){ console.log("Hello"); }, 3000);

console.log("Hi im child");
console.log("Hi im child1");
console.log("Hi im child2");
console.log("Hi im child3");
console.log("Hi im child4");
var myVar;

function myFunction() {
  myVar = setTimeout(alertFunc, 4000);
}
myFunction() ;
function alertFunc() {
  console.log("Hello  function!");
}