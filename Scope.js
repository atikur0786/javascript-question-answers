/**
 * Definition: Determines the accessibility of variables in our code
 * Types:
 *  Global Scope: Variables accessible anywhere in our code
 *  Function Scope: Variables accessible only in the function they are created in
 *  Block Scope: Variables accessible only in the block they are created in
 *  Block: Anything between { }
 */

const globalVar = "I am a global variable";

function example() {
  const functionVar = "I am a function variable";
  if (true) {
    const blockVar = "I am a block variable";
    console.log(blockVar); //Works
    console.log(functionVar); //Works
    console.log(globalVar); //Works
  }
  console.log(blockVar); //Doesn't work
}
