function strShortWord(str) {
  let arrStr = str.split(" ").sort(function (a, b) {
    return a.length - b.length;
  });
  return arrStr[0];
}

console.log(strShortWord('Палатка моего брата была черного цвета'));