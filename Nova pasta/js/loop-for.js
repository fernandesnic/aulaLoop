const app = document.getElementById("app")

const nomes = ["Beltrana", "Fulano", "Ciclano", "Rodrigo"]
const  idades = [25, 42, 27, 54, 12, 72, 87, 4]
const ul = document.createElement("ul")

const tamanho = nomes.length

// for (let i=0; i<tamanho; i++){
//     const lista = document.createElement("li")
//     lista.innerText = nomes[i]
//     ul.appendChild(lista)
// }

// for (const pos in nomes){
//     const lista = document.createElement("li")
//     lista.innerText = nomes[pos]
//     ul.appendChild(lista)
// }

for (const idade of idades){
    
    const lista = document.createElement("li")
    lista.innerText = idade
    ul.appendChild(lista)
    if (idade > 56){
        break
    }
    if (idade % 2 == 0) {
        continue
    }
}

app.appendChild(ul)