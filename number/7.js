function sum(elem) {
  let acc = elem;

  return function accumulation(elemNext) {
    if (typeof elemNext === "number") {
      acc += elemNext;
      return accumulation;
    }

    return acc;
  }
}

console.log(sum(10)(8)(6)());