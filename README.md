<h1 style="text-align: center; color: #123718; background-color: #9dbb89; border-radius: 20px; padding: 10px;">AMBICOM</h1>
<p style="text-align: center;">Una Red Social creada para compartir y guiar a la comunidad sobre el manejo de residuos sólidos voluminosos.</p>
<hr style="background-color: #3d8232">

<h2 style="text-align: center; color: #3d8232;">Descripción del proyecto</h2>
<p style="text-align: justify;">Es una red social básica enfocada en la concientización y gestión de residuos, principalmente residuos sólidos voluminosos. El proyecto surge de la necesidad de informar y educar a la ciudadanía sobre los métodos y lugares adecuados para la disposición de estos residuos, los cuales a menudo no son recolectados por los servicios de aseo regulares. <br>
Nuestra misión es conectar a personas interesadas en el medio ambiente, promoviendo campañas de reciclaje y eventos de disposición responsable a través de la interacción de una comunidad. <br>
Los usuarios pueden compartir información sobre campañas de recolección, estar informados de fechas y eventos en sus localidades y/o sectores, también pueden aprender sobre el manejo y correcta disposición de residuos sólidos voluminosos.
</p>
<h2 style="text-align: center; color: #3d8232;">Características principales</h2>
<p style="text-align: justify;">Este proyecto se centra en la implementación del diseño de interfaz de usuario y la simulación de funcionalidades clave. Las principales características incluyen:
</p>
<ul>
    <li><h6 style="color: #123718;">Páginas de Autenticación:</h6>
        <ul>
            <li><strong>Registro de Usuarios:</strong> Formulario para la creación de nuevas cuentas.</li>
            <li><strong>Inicio de Sesión:</strong> Formulario para que los usuarios registrados accedan a la plataforma.</li>
        </ul>
    </li>
    <li><h6 style="color: #123718;">Página Principal (Index):</h6>
        <ul>
            <li>Visualización de un feed de publicaciones.</li>
            <li>Componentes de filtro con dropdowns (localidad, tipo de residuo, empresa) que muestran el texto seleccionado en el botón principal, simulando la funcionalidad de filtrado.</li>
        </ul>
    </li>
    <li><h6 style="color: #123718;">Gestión de Publicaciones:</h6>
        <ul>
            <li><strong>Crear Publicación:</strong> Formulario para que los usuarios generen nuevo contenido.</li>
            <li><strong>Interacciones:</strong> Funcionalidad de "Me gusta" en las publicaciones.</li>
        </ul>
    </li>
    <li><h6 style="color: #123718;">Página de Perfil:</h6>
        <ul>
            <li><strong>Crear Publicación:</strong> Formulario para que los usuarios generen nuevo contenido.</li>
            <li>Vista del perfil del usuario, descripción de usuario, actividad usuario y sus publicaciones.</li>
        </ul>
    </li>
</ul>
<div style="margin: auto; padding: 20px; background-color: #f0c05e; border-radius: 20px;">
    <h3 style="color: #3d8232;">Tecnologías Utilizadas</h3>
    <ul>
        <li><strong>HTML:</strong> Estructura fundamental de las páginas web.</li>
        <li><strong>MDBootstrap:</strong> Framework CSS y JavaScript para el diseño y la maquetación de la interfaz de usuario, proporcionando componentes modernos y responsivos.
        </li>
        <li><strong>JavaScript (JS):</strong> Implementación de la lógica de validación de formularios y la simulación de interacciones (por ejemplo, los "Me gusta" y el cambio de texto en los filtros).</li>
        <li><strong>CSS:</strong> Creación de estilos propios para diferentes componentes.</li>
    </ul>
</div>
<h2 style="text-align: center; color: #3d8232;">Estructura del repositorio</h2>
<p style="text-align: justify;">El proyecto se compone de los siguientes archivos y carpetas, organizados para facilitar el desarrollo:
</p>
<ul>
    <li><strong>index.html:</strong> La página principal o "feed" de publicaciones.
    </li>
    <li><strong>login.html:</strong> La página de inicio de sesión para usuarios registrados.
    </li>
    <li><strong>registro.html:</strong> La página para la creación de nuevas cuentas de usuario.
    </li>
    <li><strong>perfil.html:</strong> La página que muestra la información del usuario y su historial de publicaciones.
    </li>
    <li><strong>publicaciones.html:</strong> La página donde se pueden ver las publicaciones existentes de la comunidad y crear una nueva publicación.
    </li>
    <li><strong>assets/:</strong> Carpeta que contiene todos los recursos multimedia del proyecto, se incluyen todas las imágenes utilizadas en el proyecto.
    </li>
    <li><strong>styles/:</strong> Archivos .css de estilos personalizados para cada pagina.
    </li>
    <li><strong>Script/:</strong> Archivos JavaScript, como:
        <ul>
            <li><strong>login.js:</strong> para validación de ingreso.</li>
            <li><strong>navbar.js:</strong> funcionalidad de barra de menu principal.</li>
            <li><strong>publicaciones.js:</strong> creación de nueva publicación.</li>
            <li><strong>reaccion.js:</strong> activar iconos de reacciones en la publicación.</li>
            <li><strong>registro.js:</strong> validar creación de contraseña.</li>
            <li><strong>slideIzq.js:</strong> Funcionalidad de filtrado.</li>
        </ul>
    </li>
</ul>
<div style="border: 2px solid #f0c05e; border-radius: 20px;">
    <h4 style="text-align: center; color: #3d8232;">¿Cómo ejecutar el proyecto?</h4>
    <ol>
        <li>Clonar el repositorio mediante git clone https://github.com/DanielaFajardo2315/ambicom.git</li>
        <li>Abrir los archivos: Inicia abriendo el archivo login.html en tu navegador para visualizar el proyecto. No se requiere un servidor local, ya que el proyecto es estático.</li>
        <li>Ingresa el usuario y contraseña:
            <ul>
            <li style="list-style-type: circle;"><strong>Usuario:</strong> pedroC007</li>
            <li style="list-style-type: circle;"><strong>Contraseña:</strong> pedroCORTES7*</li>
            </ul>
            <li>Navega por la página a tu gusto explorando las diferentes interacciones que puedes tener en ella.</li>
        </li>
    </ol>
</div>
<footer style="background-color: #9dbb89; width: 100%; padding: 10px; margin-top: 20px;">
<h6 style="color: #123718; text-align: center">Autores</h6>
<p style="text-align: center">L. Daniela Fajardo Ordoñez<br>
Yesmy Carolina Jimenez<br>
Laura Paola Daza B.</p>
</footer>