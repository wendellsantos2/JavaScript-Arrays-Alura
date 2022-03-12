const nomes = ['wendell','dell','dedel'] 
const notas = [7, 4.8, 8 , 7.6]


const reprovados  = nomes.filter( (_, indice) =>notas [indice]<5)
console.log(`reprovados : ${ reprovados}`)