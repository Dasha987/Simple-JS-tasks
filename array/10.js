function minMaxElem(arr) {
  let arr2 = [...arr];

  arr.sort(function (a, b) {
    return a - b;
  });

  arr2.sort(function (a, b) {
    return b - a;
  });

  return [arr[0], arr2[0]]
}

console.log(minMaxElem([1, -9, 8, 10]));