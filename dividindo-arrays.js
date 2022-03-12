const nomes =
['wendell','dell','dedel',
'tom','yasmin','mim',
'mimcapim','welligtom']

console.log("tamanho da array:", nomes.length)
const sala1 = nomes.slice(0 , nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log( ` Alunos da sala ${sala1}`)
console.log (`Alunos da sala ${sala2}`)