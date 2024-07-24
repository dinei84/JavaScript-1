    const filmes = {
        filme: 'Senhor dos aneis',
        duração: 45,
        ano: 2000   
    }

    for(const props in filmes){
        console.log(`${props}:${filmes[props]}`)
    }