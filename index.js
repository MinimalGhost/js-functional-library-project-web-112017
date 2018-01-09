fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      for (let element of Object.values(collection)) {
        iteratee(element, collection);
      }
      return collection;
    },

    map: function(collection, iteratee) {
      let newArr = []
      for (let element in Object.values(collection)) {
        newArr.push(iteratee(collection[element], element, collection));
      }
      return newArr;
    },

    reduce: function(collection, iteratee, acc) {
      for (let i = 0; i < collection.length; i++) {
        acc += iteratee(acc, collection[i], collection)
      }
      console.log(acc);
      return acc;

    },

    functions: function() {

    },


  }
})()

// fi.libraryMethod()
// fi.each([1, 2, 3], alert)
// fi.each({one: 1, two: 2, three: 3}, alert)
// console.log(fi.map([1, 2, 3], function(num){ return num * 3; }))
let sum = fi.reduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 0);
