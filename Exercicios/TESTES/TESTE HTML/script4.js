function numeros (num){
    let contagem = 0
    for(let i = 0; i < num.length; i++){
        contagem ++
        if(num[i] %3 == 0 || num[i] %5 == 0){
            console.log(`Os numeros ${num} são multiplos de 5 e 3`)
        }
        return num
    }
}

console.log(numeros([1,2,3,5,8,9]))