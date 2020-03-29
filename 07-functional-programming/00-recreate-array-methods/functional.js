/* eslint-disable no-unused-vars */
function forEach(arr, iteratorFunc) {
  for (let i = 0; i < arr.length; i++) {
    iteratorFunc(arr[i]);
  }
}

function map(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

const doubler = num => num * 2;

const tripler = num => num * 3;

function filter(arr, cond) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (cond(element)) {
      newArr.push(element);
    }
  }
  return newArr;
}

function includes(arr, searchValue) {
  if (!Array.isArray(arr)) {
    for (let key in arr) {
      if (arr[key] === searchValue) {
        return true;
      }
    }
  } else if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === searchValue) {
        return true;
      }
    }
  }
  return false;
}
// const includes = (collection, searchVal) => {
//     for (key in collection) {
//       if (collection.hasOwnProperty(key)) {
//         if (collection[key] === searchVal) {
//           return true;
//         }
//       }
//     }
//     return false;
//   };
// const countWords = (totalStart, str) => {
//     totalStart++
//     for (let i = 0; i < str.length; i++){
//         if (str[i] === ' '){
//             totalStart++
//         }
//     }
//     return totalStart;
// }
const countWords = (totalStart, str) => {
  return (totalStart += str.split(" ").length);
};

function reduce(array, startValue, combiner) {
  let value = startValue;
  array.forEach(index => {
    value = combiner(value, index);
  });
  return value;
}

const sum = numArray => {
  const adder = (curTotal, nextVal) => curTotal + nextVal;
  return reduce(numArray, 0, adder);
};

const every = (arr, checkerFunc) => {
  const everyIterator = (currentVal, nextVal) =>
    currentVal && checkerFunc(nextVal);
    return reduce (arr, true, everyIterator)
}

const some = (array, checkerFunc) => {
  const everyIterator = (currentValue, nextValue) =>
    currentValue || checkerFunc(nextValue);
  return reduce(array, false, everyIterator);
}

