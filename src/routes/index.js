import { Router } from 'express'; // Importa el Router de Express
const router = Router(); // Crea una instancia del Router


router.get('/', (req, res) => res.render('index', {title: 'Principal'})); // Define una ruta GET para la raíz ('/') que renderiza la vista 'index' usando EJS
// req es una solicitud http y res es la respuesta http
// y el res.render('index') renderiza la vista 'index' usando EJS

router.get('/about', (req, res) => res.render('about', {title: 'Sobre Nosotros'})); // Define una ruta GET para '/about' que renderiza la vista 'about' usando EJS

router.get('/contact', (req, res) => res.render('contact')); // Define una ruta GET para '/contact' que renderiza la vista 'contact' usando EJS

router.get('/bot', (req, res) => res.render('bot')); // Define una ruta GET para '/bot' que renderiza la vista 'bot' usando EJS

export default router; // Exporta el router para que pueda ser utilizado en otros archivos