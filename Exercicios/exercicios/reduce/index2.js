// programa para saber quantos lançamentos de foguetes por pais 

const rockets = [
    {pais: 'Russia',lounches: 22},
    {pais: 'Brasil',lounches: 32},
    {pais: 'Polônia',lounches: 52},
    {pais: 'China',lounches: 72}
  ]
  
  const rocketsLounches = rockets.reduce((primario,atual)=> primario + atual.lounches,0)
  
  console.log(rocketsLounches)