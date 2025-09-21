function meuEscopo(){
    const form = document.querySelector('.form'); //VARIAVEIS PARA COLETAR AS INFORMAÇÕES DENTRO DE UMA CLASS NO HTML
    const resultado = document.querySelector('.resultado');
    const pessoas = []; //ARRAY PARA COLETAR AS INFORMAÇÕES DAS PESSOAS E INSERIR DENTRO DO ARRAY
    
    function recebeDados(evento){
        evento.preventDefault(); //UTILIZADO PARA NÃO ATUALIZAR A PAGINA APOS EVENTO

        const nome = form.querySelector('.nome'); // CONJUNTO DE VARIAS PARA COLETAR OS DADOS DO USUARIOS
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura')

        pessoas.push( { // FOI UTILIZADO O PUSH PARA ENVIAR OS DADOS DAS PESSOAS AO ULTIMO ELEMENTO
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            peso: peso.value,
            altura: altura.value,
        });
        console.log(pessoas) //CRIADO PARA MOSTRAR NO CONSOLE DO NAVEGADOR AS INFORMAÇÕES DAS PESSOAS
        resultado.innerHTML += `<p>${nome.value}<br>${sobrenome.value}<br>${idade.value}<br>${peso.value}<br>${altura.value}<br>` //UTILIZADO PARA ENVIAR AO HTML ESSAS INFORMAÇÕES E IMPRIMIR NA TELA

    }


    form.addEventListener('submit', recebeDados); //FOI UTILIZADO PARA RECEBER OS DADOS APÓS SUBMIT


}
meuEscopo();
