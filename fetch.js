let a = fetch("https://reqres.in/api/users");
let p = document.getElementById("JSON")
a.then((response) => {
    console.log(response)
    return response.json()
}).then((value) => {
    p.innerHTML = JSON.stringify(value)
    console.log(value)
})