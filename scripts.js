//efeito de opacidade
const cartoes = document.querySelectorAll('.content-card')
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        console.log(entrada.isIntersecting)
        if(entrada.isIntersecting){
            console.log(entrada)
            entrada.target.classList.add('visivel')
        }
    })
})
cartoes.forEach(cartao => {
    observador.observe(cartao)
})


// Efeito de digitação do letreiro do título
let titulo = document.getElementById('titulo');
let textoOriginal = titulo.textContent;
titulo.textContent = '';
let contador = 0;
 
function resetarTexto(){
    titulo.textContent = '';
    contador = 0;
    digitarTexto();
}
 
function digitarTexto(){
    if (contador < textoOriginal.length){
        titulo.textContent += textoOriginal.charAt(contador);
        contador++; // contador = contador + 1
        setTimeout(digitarTexto, 50);
    } else {
        setTimeout(resetarTexto, 2000);
    }
}
 
digitarTexto(); // Executa a função na carga da página
 