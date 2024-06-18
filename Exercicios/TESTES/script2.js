const tempo = document.getElementById('p_temp')
const titulo = document.getElementById('p_title')
const completed = document.getElementById('p_completed')


const endpoint = "https://jsonplaceholder.typicode.com/todos/1"

fetch(endpoint)
.then(res => res.json())
.then(dados => {
    console.log(dados)
    tempo.innerHTML = dados.userId
    titulo.innerHTML = dados.title
    completed.innerHTML = dados.completed
})