let inputBuscar = document.querySelector(".entrada_sl_izq");

function buscar() {
  let textBuscar = inputBuscar.value;
  console.log(textBuscar);
  alert(`Has buscado por ${textBuscar}`);
}

document.addEventListener("DOMContentLoaded", function () {
  const botonFiltro1 = document.getElementById("dropdownMenuButton1");
  const lista1 = document.querySelectorAll(".elementoLista1");
  const botonFiltro2 = document.getElementById("dropdownMenuButton2");
  const lista2 = document.querySelectorAll(".elementoLista2");
  const botonFiltro3 = document.getElementById("dropdownMenuButton3");
  const lista3 = document.querySelectorAll(".elementoLista3");
  const botonFiltro4 = document.getElementById("dropdownMenuButton4");
  const lista4 = document.querySelectorAll(".elementoLista4");

  botonFiltro1.addEventListener("click", function () {
    filtro(lista1, botonFiltro1);
  });
  botonFiltro2.addEventListener("click", function () {
    filtro(lista2, botonFiltro2);
  });
  botonFiltro3.addEventListener("click", function () {
    filtro(lista3, botonFiltro3);
  });
  botonFiltro4.addEventListener("click", function () {
    filtro(lista4, botonFiltro4);
  });
  
});

function filtro(elementoLista, botonFiltro) {
  elementoLista.forEach((elemento) => {
    elemento.addEventListener("click", function (event) {
      event.preventDefault();

      const textoSeleccionado = this.textContent;

      botonFiltro.textContent = textoSeleccionado;
    });
  });
}
