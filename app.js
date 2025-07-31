let listaAmigos = [];

function limpiarCuadroTexto() {
  document.querySelector("#amigo").value = "";
}

function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  //isNaN = is Not a Number
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombreAmigo)) {
    //verificacion letras, permitiendo tildes y mayusculas
    alert("El nombre solo puede contener letras y espacios");
    limpiarCuadroTexto();
    return;
  }

  let queryAmigos = document.querySelector("#resultado");
  let amigosOrdenados = "";
  listaAmigos.push(nombreAmigo);
  limpiarCuadroTexto();
  console.log(listaAmigos);

  for (let i = 0; i < listaAmigos.length; i++) {
    amigosOrdenados += `<li>${listaAmigos[i]}</li>`; //Control de parrafos
  }
  queryAmigos.innerHTML = amigosOrdenados;
}

function sortearAmigo() {
  let indiceRandom = parseInt(Math.random() * listaAmigos.length);
  let amigoSorteado = listaAmigos[indiceRandom];

  if (listaAmigos.length == 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  let ganadorSorteo = document.querySelector("#resultado");
  ganadorSorteo.innerHTML = `El ganador del sorteo es ${amigoSorteado}`;
}
