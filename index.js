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

    map: function (collection, iteratee) {
      let newArr = [];
      if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
          newArr.push(iteratee(collection[i], i, collection))
        }
        return newArr;
      } else {
        let newArr = [];
        for (var element in collection) {
          newArr.push(iteratee(collection[element], element, collection))
        }
        return newArr;
      }

    },

    reduce: function(collection, iteratee, acc) {
      for (var i = 0; i < collection.length; i++) {
        acc = iteratee(acc, collection[i], collection);
      }
      return acc;
    },
    find: function(collection, predicate) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection);
      }
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return true;
        }
      }
      return false;
    },
    filter: function(collection, predicate) {
      let newArr = [];
      if (!(collection instanceof Array)) {
        collection = Object.values(collection);
      }
      for (var i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          newArr.push(collection[i])
        }
      }
      return newArr;
    },
    size: function(collection) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection);
      }
      let size = collection.length;
      return size;
    },
    first: function(collection, n = 1) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection);
      }
      let newArr = [];
      if (n === 1) {
        return collection[0];
      } else {
        for (let i = 0; i < n; i++) {
          newArr.push(collection[i])
        }
        return newArr;
      }
    },
    last: function(collection, n = collection.length - 1) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection);
      }
      let newArr = [];
      if (n === collection.length - 1) {
        return collection[collection.length - 1];
      } else {
        for (let i = collection.length - 1; i > n; i--) {
          newArr.push(collection[i])
        }
        return newArr;
      }
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
