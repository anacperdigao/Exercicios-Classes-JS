// Dado primitivo Symbol = Chave privada dentro do objeto (_velocidade é uma chave)
// Cada vez que eu chamar Symbol(), vai gerar um id diferente, nunca vai ser igual
// O underline nao tem valor semantico ali, é só um nome normal
const _velocidade = Symbol();

class Carro {
    constructor(nome, velocidade){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    // Vou criar um getter velocidade para que eu possa acessar essa nova chave Symbol fora do objeto, que é o valor real
    get velocidade(){
        return this[_velocidade];
    }

    // Aqui eu estou permitindo que o valor da velocidade seja modificado do lado de fora, mas atendendo aos requisitos que eu quero
    // Se eu tentasse mudar a velocidade do lado de fora, mesmo atendendo aos requisitos, sem o set eu nao conseguiria
    // carro1.velocidade = 90;  NAO IA CONSEGUIR, PODE TENTAR SEM O SET
    set velocidade(valor){
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;            
    }

    frear(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const carro1 = new Carro('fusca')

// Vou fazer um for só pra simular que alguem está acelerando num controle, por exemplo
for(let i = 0; i <= 200; i++){
    carro1.acelerar();
}

// Mas olha como nosso código está desprotegido, se alguem quiser mudar a velocidade na mão, nao vai ser travado.
carro1.velocidade = 1500;

/* RESPOSTA NODE.JS
Info: Start process (12:38:50)
Carro { nome: 'fusca', velocidade: 1500 }
Info: End process (12:38:50)
*/

console.log(carro1.velocidade)

