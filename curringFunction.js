/**
 * | Curring is a technique in which a function accepts a single parameter and returns a function that accepts the next parameter.
 */

function curringFunction(a) {
  return function (b) {
    return a + b;
  };
}

let add = curringFunction(10);
console.log(add(20)); // 30
console.log(add(30)); // 40
console.log(add(40)); // 50
