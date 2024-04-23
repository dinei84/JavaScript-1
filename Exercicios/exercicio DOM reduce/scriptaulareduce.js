// reduce() serve para reduzir o array conforme o meu codigo 

const p_array = document.querySelector('#array')
const btnReduzir = document.querySelector('#btnReduzir')
const resultado = document.querySelector('#resultado')

const elementos_array=[11,14,10,20,12]
let ant=[]
let atu=[]

p_array.innerHTML='[' + elementos_array + ']' 

btnReduzir.addEventListener('click',(evt)=>{
    resultado.innerHTML=elementos_array.reduce((anterior,atual,pos)=>{
        ant.push(anterior)
        atu.push(atual)
        return atual + anterior
    })
    resultado.innerHTML+= '<br/> Valor Anterior ' + ant + "<br/> Valor Atual " + atu
})