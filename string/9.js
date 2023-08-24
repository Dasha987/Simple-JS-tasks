function dublStr(str) {
  let srtArr = str.split("");
  let newStrArr = srtArr.map((elem, index) => {
    return elem.toUpperCase() + elem.repeat(index);
  });
  return newStrArr.join("-");
}

console.log(dublStr("abc9i"));
