import { Router } from 'express'; // Importa el Router de Express
import { ConsultarCursos } from '../public/services/conexion.js'; // Importa la función ConsultarCursos desde el servicio de conexión a la base de datos

const router = Router(); // Crea una instancia del Router


router.get('/', (req, res) => res.render('index', {title: 'Principal'})); // Define una ruta GET para la raíz ('/') que renderiza la vista 'index' usando EJS
// req es una solicitud http y res es la respuesta http
// y el res.render('index') renderiza la vista 'index' usando EJS

router.get('/about', (req, res) => res.render('about', {title: 'Sobre Nosotros'})); // Define una ruta GET para '/about' que renderiza la vista 'about' usando EJS

router.get('/catalogo', (req, res) => res.render('catalogoCursos', {title: 'Catálogo'})); // Define una ruta GET para '/catalogo' que renderiza la vista 'catalogo' usando EJS

router.get('/contact', (req, res) => res.render('contact')); // Define una ruta GET para '/contact' que renderiza la vista 'contact' usando EJS

router.get('/bot', (req, res) => res.render('bot')); // Define una ruta GET para '/bot' que renderiza la vista 'bot' usando EJS



// Define una ruta GET para '/api/get-cursos' que obtiene los cursos desde la base de datos
router.get('/api/get-cursos', async (req, res) =>{ // Esta ruta maneja las solicitudes GET a '/api/get-cursos'
    const cursos = await ConsultarCursos(); // Llama a la función ConsultarCursos para obtener los cursos desde la base de datos, se pone await porque ConsultarCursos es una función asíncrona
    res.status(200).json(cursos); // Envía los cursos obtenidos como respuesta en formato JSON con un estado 200 (OK)
    // res.status(200) establece el código de estado HTTP de la respuesta a 200, lo que indica que la solicitud fue exitosa
    // .json(cursos) convierte el objeto cursos a formato JSON y lo envía como respuesta al cliente
})


export default router; // Exporta el router para que pueda ser utilizado en otros archivos