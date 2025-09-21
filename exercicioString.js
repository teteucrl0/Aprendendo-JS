const nome = prompt('DIGITE SEU NOME COMPLETO: ')

document.body.innerHTML += `SEU NOME É ${nome}<br>`
document.body.innerHTML += `SEU NOME TEM ${nome.length}<br>`
document.body.innerHTML += `A SEGUNDA LETRA DO SEU NOME É: ${nome.charAt(1)}<br>`
document.body.innerHTML += `QUAL O PRIMEIRO INDICE DA LETRA S NO SEU NOME: ${nome.indexOf('s')}<br>`
document.body.innerHTML += `QUAL O ULTIMO INDICE DA LETRA S NO SEU NOME: ${nome.lastIndexOf('s')}<br>`
document.body.innerHTML += `AS ULTIMAS 3 LETRAS DO SEU NOME: ${nome.slice(-3)}<br>`
document.body.innerHTML += `AS PALAVRAS DO SEU NOME: ${nome.split(' ', 4)}<br>`
document.body.innerHTML += `SEU NOME MAIUSCULO: ${nome.toUpperCase()}<br>`
document.body.innerHTML += `SEU NOME MINUSCULO: ${nome.toLowerCase()}<br>`