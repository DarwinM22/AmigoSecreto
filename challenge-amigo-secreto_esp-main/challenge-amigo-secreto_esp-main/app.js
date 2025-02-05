let nombres = [];

function agregarAmigo() {
    let input = document.getElementById("amigo").value;
    if (!isNaN(input) || input.trim() === "") {
        alert("Introduce un nombre");
    } else {
        nombres.push(input);
        document.getElementById("amigo").value = "";
        actualizarLista();
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("Agrega al menos un nombre antes de continuar");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * nombres.length);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "El amigo secreto es: " + nombres[indiceAleatorio];
        document.getElementById("listaAmigos").innerHTML = "";
        nombres = [];
    }
}
