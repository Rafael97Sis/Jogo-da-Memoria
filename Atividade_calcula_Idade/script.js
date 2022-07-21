function caculaIdade(anos) {
  return `Daqui  a ${anos}, ${this.nome} tera ${this.idade + anos} anos de idade. `;

}

const pessoa01 = {
  nome: 'ana',
  idade: 26
}
const pessoa02 = {
  nome: 'victor',
  idade: 25
}
const pessoa03 = {
  nome: 'Jose',
  idade: 19
}

const animal = {
  nome: 'Viralata',
  idade: 3
}
console.log(caculaIdade.call(animal, 30))


