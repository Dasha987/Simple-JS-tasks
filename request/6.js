const requestHeaders = new Headers();
requestHeaders.append("apikey", "цифры_ключа");

let p = new Promise((resolve, reject) => {
  fetch("http://httpbin.org/", {
    method: "GET",
    headers: requestHeaders
  })
    .then(response => {
      console.log(response);
      if (response.ok) resolve("Данные есть");
      else reject("Данных нет");
    })
    .catch(error => reject(error + ", поэтому данных нет"))
})

p.then(str => console.log(str), str => console.log(str));

