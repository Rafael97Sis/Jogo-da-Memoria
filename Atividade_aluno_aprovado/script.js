const alunos = [
  {
    nome: 'joao',
    nota: 4,
    turma: '18'
  },
  {
    nome: 'maria',
    nota: 8,
    turma: '18'
  },
  {
    nome: 'Pedro',
    nota: 6,
    turma: '18'
  }
]


function alunosAprovados(arr, media) {
  let aprovados = [];

  for (let i = 0; i < arr.length; i++) {

    const { nota, nome } = arr[i];

    if (nota >= media) {
      aprovados.push(nome);
    }
  }
  return aprovados;
}

console.log(alunosAprovados(alunos, 5))