function soma(num1, num2){  //FORMA PADRAO DE REALIZAR UMA FUNCAO, MAS É BASTANTE UTILIZANDO COM MAIS DE UM PARAMETRO
    const soma = num1 + num2;
    return `A SOMA É ${soma}`;
}

console.log(soma(20, 30));

const raiz = numero => (Math.sqrt(numero)) // ISSO É UMA ARROW FUNCTION, CRIADA PARA UTILIZAR EM FUNCOES COM UM PARAMETRO


console.log(raiz(25));