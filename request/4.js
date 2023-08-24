let p1 = new Promise((resolve, reject) => {
    fetch("https://reqres.in/")
        .then(response => resolve(response))
})

let p2 = new Promise((resolve, reject) => {
    fetch("https://reqres.in/")
        .then(response => resolve(response))
})

Promise.all([p1, p2]).then(data => console.log(data))