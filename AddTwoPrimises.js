/**
 * Given two promises promise1 and promise2, return a new promise.
 * promise1 and promise2 will both resolve with a number.
 * The returned promise should resolve with the sum of the two numbers.
 */

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  return new Promise(async (resolve, reject) => {
    const firstPromiseResult = await promise1;
    const secondPromiseResult = await promise2;
    resolve(firstPromiseResult + secondPromiseResult);
  });
};
