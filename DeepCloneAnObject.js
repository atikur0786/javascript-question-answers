/**
 * | ---------------------------------------------------------------------------------
 * | Deep Clone an Object – Write a function to create a deep copy of a nested object.
 * | ---------------------------------------------------------------------------------
 */

// Function to create a deepClone
function deepClone(obj) {
    // Return the param if it's null or not an object
    if (obj === null || typeof obj !== "object") {
        return obj
    }

    const clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key])
        }
    }

    return clone;
}

// Test
const original = {
    name: "Varun",
    address: { city: "Hyderabad", zip: "500081" },
    hobbies: ["coding", "reading"]
};

const copied = deepClone(original);
copied.address.city = "Bangalore"; // This won't affect the original object
copied.hobbies.push("gaming"); // This also won't affect the original

console.log(original.address.city); // "Hyderabad"
console.log(original.hobbies); // ["coding", "reading"]
console.log(copied.hobbies); // ["coding", "reading", "gaming"]

/**
 * | --------------------------
 * | Shallow copy exmaple below
 * | --------------------------
 */

const obj1 = { name: "Varun", address: { city: "Hyderabad", zip: "500081" } };
const obj2 = { ...obj1 };

obj2.address.city = "Bangalore"; // Modifies obj1 as well

console.log(obj1.address.city); // "Bangalore" (Unexpected behavior!)

/**
 * | ---------------------------------
 * | Alternative Approach (Using JSON)
 * | A simple way to deep clone is:
 * | ---------------------------------
 */
const jsonCopied = JSON.parse(JSON.stringify(original));
console.log(jsonCopied);