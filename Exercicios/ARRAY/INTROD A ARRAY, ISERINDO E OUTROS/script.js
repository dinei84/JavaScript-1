const caixa = document.querySelector('#caixa')

let cores = ['azul','verde','vermelho','amarelo',['claro','escuro','medio']]
let cursos = ['Javascript','css','HTML','PHP',cores]

// cursos [0]=`Aqui ficam os cursos de: ` + 2024

// cursos.push('C++','Python','C#')
// cursos.unshift('Machine lerning') // Adiciona um elemento no inicio do array 
// cursos.shift() // retura o primeiro elemento do array
// cursos.pop() // retira o ultimo elemento do array
// cursos.pop()
// cursos.pop()
console.log(cursos[4][4][2])

cursos.map((el)=>{
    let p = document.createElement('p')
    p.innerHTML=el
    caixa.appendChild(p)
})
