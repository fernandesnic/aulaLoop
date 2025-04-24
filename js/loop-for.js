const app = document.getElementById("app")

const nomes = ["Beltrana", "Fulano", "Ciclano", "Rodrigo"]
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

for (const nome of nomes){
    const lista = document.createElement("li")
    lista.innerText = nome
    ul.appendChild(lista)
}

app.appendChild(ul)