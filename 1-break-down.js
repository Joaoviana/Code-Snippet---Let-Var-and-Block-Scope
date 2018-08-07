// x is hoisted to the global scope 
// x: undefined
x = 1;
// x: (number, 1)

if (x === 1) { // Entering Block 1 Scope
  
   x = 2;
   //(Number, 2)
  { // Entering Block 2 Scope
    var x = 3;
    //(Number, 3)
    console.log("Expected x value: 3");
    }
}
console.log("Actual value of x: " + x);
