fetch("https://reqres.in/")
    .then(response => response)
    .then(data => {
        console.log(data);
        return fetch("https://reqres.in/")
    })
    .then(response => response)
    .then(data => {
        console.log(data)
    });