

 class Cadastro{
    constructor(nome, endereco, contato, cpf, data_nascimento){
        this.nome_cadastro = nome
        this.endereco_cadastro = endereco
        this.contato_cadastro = contato
        this.cpf = cpf
        this.data_nascimento = data_nascimento

    }
}

 class Produto{
    constructor(nome_produto, preco, descricao, marca, tipo){
        this.nome_produto = nome_produto
        this.preco = preco
        this.descricao = descricao
        this.marca = marca
        this.tipo = tipo
    }
}

 class Estoque extends Produto{
    constructor(qtd_atual, qtd_minima){
        this.qtd_atual = qtd_atual
        this.qtd_minima = qtd_minima
    }
}

 class Conta extends Cadastro{
    constructor(){

    }
}

module.exports = {Cadastro, Produto }