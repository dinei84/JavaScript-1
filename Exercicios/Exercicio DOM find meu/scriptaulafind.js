const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')

                                         // com numeros

// const elementos_array=[10,5,8,15,20,35,22]

// p_array.innerHTML = '[' + elementos_array + ']'

// btnPesquisar.addEventListener('click',(evt)=>{
//     const retorno = elementos_array.find((e,i)=>{
//         if(e == txt_pesquisar.value){
//             resultado.innerHTML=`Valor pesquisado: ${e} Está na posição: ${i}`
//             return e
//         }else{
//             resultado.innerHTML='Valor não encontrado!'
//         }
//     })
//     console.log(retorno)
// })

// com strings

const elementos_array=['html','css','javascript','c++']

p_array.innerHTML = '[' + elementos_array + ']'

btnPesquisar.addEventListener('click',(evt)=>{
    const retorno = elementos_array.find((e,i)=>{
        if(e.toUpperCase() == txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML=`Curso pesquisado: ${e} Está na posição: ${i}`
            return e
        }else{
            resultado.innerHTML=`O Curso  ${txt_pesquisar.value} não foi encontrado!`
        }
    })
    console.log(retorno)
})




