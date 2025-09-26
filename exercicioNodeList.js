const paragrafos = document.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);

const mudarCorDoBody = document.body.style.backgroundColor = '17, 86, 102'


paragrafos.forEach(p=>{
    p.style.color = 'white'
    p.style.backgroundColor = 'rgb(17, 86, 102)'
})