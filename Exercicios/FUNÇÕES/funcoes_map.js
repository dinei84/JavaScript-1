// a função map serve entre outras coias para manipular coleções, para isso temos ate 3 parametros de referencia dentro do map que são .map(elemento,indice),
// a principal diferença para trabalhar com percorrer coleções entre o .map() e o for of, é que no .map() conseguimos alem de percorrer sem interrupções, tambem conseguimos trabalhar e retornar os elementos

// const cursos =['html','css','javascript','react']
// cursos.map((el,i)=>{
//     console.log(`curso,${el} na posição ${i}`)
// })

const cursos =['html','css','javascript','react']
let c = cursos.map((el,i)=>{
    return el
})

console.log(c [0])