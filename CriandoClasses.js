// Classe é quase igual uma funçao construtora

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    
    // Vou criar métodos, QUE PASME, VAI DIRETO PARA O PROTOTYPE SEM PRECISAR LINKAR COMO ERA NA FUNÇÃO CONSTRUTORA
    falar() {
        console.log(`${this.nome} está falando.`)
    }
  
}

// Aqui vou instanciar, que é criar um objeto a partir da classe ou funçao construtora, que são moldes de objetos.
const p1 = new Pessoa('Ana Carolina', 'Perdigão');

console.log(p1)
console.log(p1.falar())


//-------------------- COMPARATIVO FAZENDO A MESMA COISA COM FUNÇÃO CONSTRUTORA ---------------------------------//

function Pessoa2 (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function (){
    console.log(`${this.nome} está falando.`);
}

const p2 = new Pessoa2('Julio', 'Cezar')

console.log(p2)
console.log(p2.falar())