class personagem{
    constructor(nome, idade, tipo, nivel){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.nivel = nivel
    }

    dados(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Nível: ${this.nivel}`)

        console.log("--------------------------------")
    }

    atacar(){
        if(this.tipo === "mago"){
            let ataque = "Magia"
            console.log(`O ${this.tipo} ${this.nome} atacou usando ` + ataque)
        } else if (this.tipo === "guerreiro"){
            let ataque = "Espada"
            console.log(`O ${this.tipo} ${this.nome} atacou usando ` + ataque)
        } else if (this.tipo === "monge"){
            let ataque = "Artes Marciais"
            console.log(`O ${this.tipo} ${this.nome} atacou usando ` + ataque)
        } else if (this.tipo === "ninja"){
            let ataque = "Shuriken"
            console.log(`O ${this.tipo} ${this.nome} atacou usando ` + ataque)
        }
    }
}

let personagem1 = new personagem("Gustavo", 30, "mago", 70)


personagem1.dados()
personagem1.atacar()
