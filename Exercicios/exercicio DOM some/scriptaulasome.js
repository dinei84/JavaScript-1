// some = alguns. vai dar os quando pelo menos um dos valores do array estiver de acordo 

const p_array = document.querySelector('#array')
const btnVerificar = document.querySelector('#btnVerificar')
const resultado = document.querySelector('#resultado')

const elementos_array=[11,14,10,20,12,15,17,16,13]
p_array.innerHTML='[' + elementos_array + ']'

btnVerificar.addEventListener('click',(evt)=>{
    const ret = elementos_array.some((e,i)=>{
        if(e < 18){
            resultado.innerHTML = `Array não conforme na posição ${i}`
        }
        return e >= 18
    })
    if (ret){
        resultado.innerHTML = 'OK'
    }
    //console.log(ret)
}) 