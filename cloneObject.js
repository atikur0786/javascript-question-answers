/**
 * | Clone an object
 */

function cloneObject(obj) {
  return { ...obj };
}

const originalObject = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};
const cloned = cloneObject(originalObject);
cloned.name = "Doe";
console.log(originalObject);
console.log(cloned);
