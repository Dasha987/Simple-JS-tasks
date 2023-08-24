function initialsCreate(str) {
  let strUp = str.toUpperCase().split("");
  let secondInitial = strUp.indexOf(" ") + 1;
  return (strUp[0] + "." + strUp[twoInitial] + ".");
}

function initialsCreate2(str) {
  let arrStr = str.split(" ");
  let initials = arrStr.map((elem) => {
    return elem.toUpperCase().slice(0, 1) + ".";
  })
  return initials.join("");
}

console.log(initialsCreate2('Макеева Дарья Сергеевна'));