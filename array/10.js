//первый вариант
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

//второй вариант
function minMaxElem2(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });

  let lengthArr = arr.length;
  
  return [arr[0], arr[lengthArr - 1]];
}

console.log(minMaxElem2([1, -9, 8, 10]));

//третий вариант 
function minMaxElem3(arr) {
  var min = Math.min( ...arr );
  var max = Math.max( ...arr );

  return [min, max];
}

console.log(minMaxElem3([1, -9, 8, 10]));
