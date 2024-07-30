

const calculadora = (n1,n2,operador) =>{
    if(operador === 'add'){
        return n1 + n2  
    }else if (operador === 'sub'){
        return n1-n2
    }else if (operador === 'div'){
        return n1 / n2
    }else if (operador === 'mult'){
        return n1 * n2
    }else{
        alert('Nenuma operação encontrada')
    }
}

console.log(calculadora(150,15,'mult'))
console.log(calculadora(150,15,'sub'))
console.log(calculadora(150,15,'div'))
console.log(calculadora(150,15,'add'))
