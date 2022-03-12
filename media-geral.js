const salaDePython =  [3, 4.8, 2 , 7.6] 
const salaDeJavascript = [7, 4.8, 8 , 7.6] 
const SaladeJava = [7, 4.8, 10 , 7.6] 

function mediaSala (notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum,atual)=>
    atual + acum , 0)
    return somaDasNotas/notasDaSala.length
}
console.log ( `Média da sala de java script ${mediaSala(salaDeJavascript)}`)
console.log ( `Média da sala de java java ${mediaSala(SaladeJava)}`)
console.log ( `Média da sala de java python ${mediaSala(salaDePython)}`)

const notas = [10 ,6.5,8,7]
const media = notas.reduce((acum,atual )=>atual+acum,0 / notas.length)
console.log(media)