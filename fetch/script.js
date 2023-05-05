const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const p3 = document.getElementById("p3")

let luke = {}

console.log("Before")
fetch("https://swapi.dev/api/people/1/")
    .then(function(response) {
        return response.json()
    })
    .then(function(res) {
        luke = res
        p1.innerText = "Luke's full name is " + luke.name
        p2.innerText = "His hair color is " + luke.hair_color
        p3.innerText = `He is ${luke.height} cm tall`
    })
console.log("After")
console.log("LUKE", luke)


// AJAX = Asynchronous JavaScript and XML(or json)

// fetch("https://swapi.dev/api/people/1/")
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(res) {
//         luke = res
//         const [movie1, movie2, movie3, ...movies] = luke.films // array
//         console.log(movies)

//         luke.films.forEach(function(url, index) {
//             console.log(index, url)
//         })
//     })
