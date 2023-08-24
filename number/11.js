function summaElem(num) {
  num = Math.abs(num);
  let numStrArr = String(num).split("");
  let numArr = numStrArr.reduce((summa, elem) => {
    return Number(summa) + Number(elem);
  })
  return numArr;
}

console.log(summaElem(951));