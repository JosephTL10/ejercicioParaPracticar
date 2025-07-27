import express from 'express'; // Importa express from the 'express' module
import {dirname, join} from 'path'; // Importa dirname de 'path' para manejar rutas de archivos
import {fileURLToPath} from 'url'; // Importa fileURLToPath de 'url' para convertir URLs a rutas de archivos


import cors from 'cors'; // Importa cors para manejar solicitudes de diferentes orígenes


import router from './routes/index.js'; // Importa las rutas definidas en 'index.js' dentro de la carpeta 'routes'
import {Conectar} from './public/services/conexion.js'; // Importa la función conectar desde 'conexion.js' para establecer conexión a la base de datos


const app = express(); // Crea una instancia de la aplicación Express


const __dirname = dirname(fileURLToPath(import.meta.url)); // Obtiene el directorio actual del archivo

app.set('views',join(__dirname, 'views')); // Establece el directorio de vistas a 'views' dentro del directorio actual


app.set('view engine', 'ejs'); // Configura el motor de vistas a EJS

app.use(router); // Usa las rutas definidas en 'router'

app.use(cors()); // Habilita CORS para permitir solicitudes de diferentes orígenes

app.use(express.static(join(__dirname, 'public'))); // Sirve archivos estáticos desde el directorio 'public'

Conectar(); // Llama a la función conectar para establecer conexión con la base de datos

app.listen(3000) // Inicia el servidor en el puerto 3000

console.log('Server is running on port',3000); // Imprime un mensaje en la consola indicando que el servidor está corriendo