const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];

function intersection(a, b) {
  let newArr = [];
  for (let itemA of a) {
    for (let itemB of b) {
      if (itemA === itemB) {
        newArr.push(itemA);
      }
    }
  }
  return newArr;
}

console.log(intersection(a, b));