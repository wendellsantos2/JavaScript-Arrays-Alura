const alunos = ['joão', 'juliana', 'caio ', 'Ana']
const mediasDosAlunos = [10,9,7,6]

let listaDeNotasEAlunos = [ alunos, 
    mediasDosAlunos]

    const exibeNomeNota = (nomeDoAluno) => {
        if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
            indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
            return listaDeNotasEAlunos [0] [indice] + ', sua media é '
             + listaDeNotasEAlunos[1][indice]
        }else{
            return " Aluno não está cadastrado "
        }
        
    }
    console.log(exibeNomeNota("juliana"))

    