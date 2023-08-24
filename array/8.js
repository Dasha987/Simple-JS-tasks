// первый вариант
function sumArr(array) {
  let arr = array.flat(Infinity);
  let sumArr = arr.reduce((summa, elem) => {
    return summa + elem;
  })
  return sumArr;
}

console.log(sumArr1([[1, 2, [2, 4]], [9], [10, 12]]));

// второй вариант
function sumArr2(array) {

  function flat(a) {
    resultA = [];

    a.forEach((elem) => {
      if (Array.isArray(elem)) {
        resultA = resultA.concat(
          flat(elem)
        )
      } else {
        resultA.push(elem)
      }
    })
    return resultA;
  }

  let arr = flat(array);
  let sumArr = arr.reduce((summa, elem) => {
    return summa + elem;
  })
  return sumArr;
}

console.log(sumArr2([[1, 2, [2, 4]], [9], [10, 12]]));

// третий вариант
function sumArr3(array) {
  let resultA = 0;

  function flat(a) {
    a.forEach((elem) => {
      if (Array.isArray(elem)) {
        flat(elem)
      } else {
        resultA = resultA + elem
      }
    })
    return resultA;
  }

  return flat(array);
}

console.log(sumArr3([[1, 2, [2, 4]], [9], [10, 12]]));