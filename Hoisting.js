/**
 *  Definition: Javascript's behavior of moving variable and function declarations to the top of their scope before execution
 *  Key Points:
 *   - Only the declaration is hoisted, not the assignment
 *   - Function declarations are hoisted before variable declarations
 *   - Variables declared with 'let' and 'const' are not hoisted but accessible in a 'temporal dead zone' before their declaration
 *   - Hoisting is done for both global and local scope
 *   - var declarations are hoisted but not initialized
 */

console.log(hoistedFunction()); // Works
console.log(varVariable); // undefined (not initialized/error)
console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization(Error - TDZ)
console.log(constVariable); // ReferenceError: Cannot access 'constVariable' before initialization(Error - TDZ)
function hoistedFunction() {
  return "I am hoisted!";
}
var varVariable = "I am a var variable";
let letVariable = "I am a let variable";
const constVariable = "I am a const variable";
