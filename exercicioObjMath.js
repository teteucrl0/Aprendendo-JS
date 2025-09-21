let numero = prompt("DIGITE O NUMERO QUE DESEJA CALCULAR: ");
numero = Number(numero);


document.body.innerHTML += `<h1>Este é o numero: ${numero}</h1>`
document.body.innerHTML += `A RAIZ QUADRADA É: ${Math.sqrt(numero).toFixed(2)}<br><br>`
document.body.innerHTML += `${numero} É INTEIRO: ${Number.isInteger(numero)}<br><br>`
document.body.innerHTML += `É NaN: ${Number.isNaN(numero)}<br><br>`
document.body.innerHTML += `ARREDONDADO PARA BAIXO: ${Math.floor(numero)}<br><br>`
document.body.innerHTML += `ARREDONDADO PARA CIMA: ${Math.ceil(numero)}<br><br>`
document.body.innerHTML += `COM DUAS CASAS DECIMAIS ${numero.toFixed(2)}<br><br>`