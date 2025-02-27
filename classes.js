class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        switch (this.tipo) {
            case "Mago":
                console.log(`o ${this.tipo} atacou usando magia`)
                break;
            case "Guerreiro":
                console.log(`o ${this.tipo} atacou usando espada`)
                break;
            case "Monge":
                console.log(`o ${this.tipo} atacou usando artes marciais`)
                break;
            case "Ninja":
                console.log(`o ${this.tipo} atacou usando shuriken`)
                break;
            default:
                break;
        }
    }
}

const heroi = new Heroi("Raphael", 25, "Ninja")
heroi.atacar()