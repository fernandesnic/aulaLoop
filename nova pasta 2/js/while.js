const app = document.getElementById("app")
const campo = document.getElementById('numero')
campo.addEventListener ('keyup', (event)=>{
    const numero = event.target.value
    do{
        console.log("numero invalido")
    }while(numero <= 0)
    while (false){
        if(numero % 2 == 0){
            break
        }
        console.log(numero)
        if(numero > 666){
            break
        }
    }

})
const nomes = ["Beltrana", "Fulano", "Ciclano", "Rodrigo"]
const  idades = [25, 42, 27, 54, 12, 72, 87, 4]
const numero = 100
