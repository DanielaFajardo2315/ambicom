const titulo = document.getElementById('titulo');
const imagen = document.getElementById('imagen');
const autor = document.getElementById('autor');
const contenido = document.getElementById('contenido');
const etiquetas = document.getElementById('etiquetas');
const tajertas = document.getElementById('contenedorTarjetas');
let publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || [];

function crearPublicacion (){
    console.log(titulo.value);
    console.log(imagen.value);
    console.log(autor.value);
    console.log(contenido.value);
    console.log(etiquetas.value);
    console.log(tajertas);

    publicaciones.push({
        titulo: titulo.value,
        imagen: imagen.value,
        autor: autor.value,
        contenido: contenido.value,
        etiquetas: etiquetas.value
    })
    localStorage.setItem('publicaciones', JSON.stringify(publicaciones))
    console.log(publicaciones);
    alert ('Publicación creada exitosamente');
    mostrarPublicacion();
}

function mostrarPublicacion(){
    publicaciones.forEach((tarjeta)=>{
        tajertas.innerHTML += `
        <div
            class="card px-3 pt-3 mb-5 col-md-10 col-lg-8 container position-relative"
            style="max-width: 32rem"
          >
            <!-- Header con info del usuario -->
            <div class="d-flex align-items-start mb-3">
              <!-- Imagen de usuario -->
              <img
                src="../assets/fotoPerfil.png"
                class="rounded-circle me-3"
                alt="Usuario"
                style="width: 40px; height: 40px; object-fit: cover"
              />

              <!-- Columna con info del usuario -->
              <div class="flex-grow-1">
                <h6 class="mb-1 fw-bold">${tarjeta.autor}</h6>

                <small class="text-muted d-block">Hace 2 días</small>
                <div class="mt-1 etiqueta">
                  <span class="badge coloretq me-1">#${tarjeta.etiquetas}</span>
                </div>
              </div>

              <!-- Dropdown-icono Publicacaciones Opciones -->
              <div class="dropdown position-absolute end-0">
                <button
                  class="btn btn-rounded dropdown-toggle shadow-none btnTresPuntos"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  data-mdb-dropdown-init
                  data-mdb-ripple-init
                  aria-expanded="false"
                >
                  <i class="fas fa-ellipsis-v iconoPuntos"></i>
                </button>
                <ul
                  class="dropdown-menu btn-opc-public"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li><a class="dropdown-item" href="#">Modificar</a></li>
                  <li><a class="dropdown-item" href="#">Eliminar</a></li>
                  <!-- <li><a class="dropdown-item" href="#">Acción 3</a></li> -->
                </ul>
              </div>
            </div>

            <!-- News block -->
            <div>
              <!-- Featured image -->
              <div
                class="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                data-mdb-ripple-color="light"
              >
                <img src="${tarjeta.imagen}" class="img-fluid img_publi_nueva" />
                <a href="#!">
                  <div
                    class="mask"
                    style="background-color: rgba(251, 251, 251, 0.15)"
                  ></div>
                </a>
              </div>
              <!-- Article title and description -->
              <div class="contenido_publi">
                <h5 class="titulo_publi">
                  ${tarjeta.titulo}
                </h5>
                <p>
                  ${tarjeta.contenido}
                </p>
                <div class="iconos_f_publi">
                  <div class="iconos_publi d-flex gap-2">
                    <span class="position-relative">
                        <i class="fas fa-heart icon-btn" data-type="heart" style="cursor:pointer; font-size:1.5rem;"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
                      </span>
                      <!-- Like -->
                      <span class="position-relative">
                        <i class="fas fa-thumbs-up icon-btn" data-type="like" style="cursor:pointer; font-size:1.5rem;"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">0</span>
                      </span>
                      <!-- Dislike -->
                      <span class="position-relative">
                        <i class="fas fa-thumbs-down icon-btn" data-type="dislike" style="cursor:pointer; font-size:1.5rem;"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">0</span>
                      </span>
                    <i class="fas fa-share-nodes"></i>
                    <i class="fas fa-message"></i>
                  </div>
                  <div class="nombre_usuario_publi">
                    <span
                      >Publicado por: ${tarjeta.autor}</span>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        `
    })
}

mostrarPublicacion();