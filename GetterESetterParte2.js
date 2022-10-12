
class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const pessoa1 = new Pessoa('Ana', 'Perdigao')

// Usando o setter
pessoa1.nomeCompleto = 'Luiz Miranda'

console.log(pessoa1)
console.log(pessoa1.nomeCompleto)