const campo_resultado = document.querySelector("#resultado")
const btn_limpar = document.querySelector("#limpar")
const btn_multiplicar = document.querySelector("#multiplicar")
const btn_subtrair = document.querySelector("#subtrair")
const btn_somar = document.querySelector("#somar")
const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")

const subtrair = (n1,n2)=> campo_resultado.innerHTML = n1 - n2

btn_limpar.addEventListener("click", ()=>{
    campo_resultado.innerHTML = 0
})

btn_subtrair.addEventListener("click", ()=>{
    subtrair(Number(numero1.value), Number(numero2.value))
})

btn_multiplicar.addEventListener("click", ()=>{
    multiplicar(Number(numero1.value), Number(numero2.value))
})

btn_somar.addEventListener("click", ()=>{
    somar(Number(numero1.value), Number(numero2.value), resultado)
})

function somar(x, y, z){
    const a = x + y
    z(a)
}

function multiplicar(n1, n2){
    campo_resultado.innerHTML = n1 * n2
}
function resultado(result) {
    campo_resultado.innerHTML = result
}