// nome, idade

console.log(process.argv)

const argv = process.argv.slice(2)

console.log(argv)

const nome = argv[0].splice('=')[1]

console.log(nome)

const idade = argv[0].splice('=')[1]

console.log(idade)