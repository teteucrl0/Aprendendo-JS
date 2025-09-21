let carro = {   //OBJETO PARA CRIAR O CARRO
    marca: 'Chevrolet',
    modelo: 'Camaro', 
    ano: 2005,
    
    exibirCarro(){  //FUNÇÃO PARA EXIBIR AS INFORMAÇÕES DO CARRO CRIADO
    console.log(`
    A MARCA DO CARRO É: ${this.marca},
    O MODELO É: ${this.modelo}
    E O ANO É ${this.ano}`);
    }
}

carro.exibirCarro();
    

