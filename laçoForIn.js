const frutas = ['Maça','Uva','Laranja','Kiwi'];
for(let i in frutas){
    console.log(frutas[i]);
}
let pessoa = {
    nome: 'Matheus',
    idade: 21,
    altura: 1.80,
};
pessoa.altura = pessoa.altura.toFixed(2);
for (let i in pessoa){
    console.log(pessoa[i]);
}