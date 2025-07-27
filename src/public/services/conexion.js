import pg, { Client } from 'pg'; // Importa el módulo pg para interactuar con PostgreSQL
const {Cliente} = pg; // Desestructura Cliente del módulo pg

// Importa el cliente de PostgreSQL para establecer una conexión con la base de datos
// Cuando acabe el mes del servidor, se deben de cambiar las credenciales de la base de datos
// y se debe de actualizar el archivo conexion.js con las nuevas credenciales, que nos dara el render
const config={
    user: 'proyecto_react_c4ez_user', // Usuario de la base de datos
    host: 'dpg-d1tlcv49c44c73c6kdvg-a.oregon-postgres.render.com', // Host de la base de datos
    database: 'proyecto_react_c4ez', // Nombre de la base de datos
    password: 'T8BUaq2ewArSdTFwnmUKsEWmLwyRBXLG', // Contraseña del usuario
    port: 5432, // Puerto de conexión a la base de datos
    ssl: {
        rejectUnauthorized: false // Desactiva la verificación del certificado SSL
    }
}

// LaS funciones asíncronas permiten manejar operaciones que toman tiempo, como la conexión a una base de datos

export async function Conectar(params) { // Función para conectar a la base de datos, se pone params aunque no se use, porque es parte de la función asíncrona
    
    // Crea una instancia del cliente de PostgreSQL con la configuración proporcionada
    // se usa new Client(config) para crear un nuevo cliente de PostgreSQL
    // que se conectará a la base de datos con los parámetros especificados en config
    const cliente = new Client(config);

    // Para manejar la conexión de manera asíncrona, se utiliza un bloque try-catch
    try{
        await cliente.connect(); // Intenta conectar al cliente de PostgreSQL
        console.log('Conexión exitosa a la base de datos'); // Mensaje de éxito
        
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error); // Mensaje de error
        
    }
    // se tiene que hacer el npm install pg para instalar el paquete pg que permite interactuar con PostgreSQL
    // y se debe importar en el archivo donde se necesite usar la conexión a la base de datos
    // El cliente se puede usar para realizar consultas a la base de datos una vez conectado 
}

// Función para consultar los cursos en la base de datos
// Esta función se conecta a la base de datos y realiza una consulta para obtener todos los cursos
export async function ConsultarCursos(){
    const cliente = new Client(config)
    try{
        await cliente.connect()

        // resultado espera que la consulta a la base de datos se realice correctamente
        const resultado = await cliente.query("SELECT * FROM cursos"); // Realiza una consulta a la tabla 'cursos', SELECT * FROM cursos significa que se seleccionan todas las columnas de la tabla cursos
        console.log('Consulta exitosa:', resultado.rows); // Imprime los resultados de la consulta, rows es una propiedad del resultado que contiene las filas devueltas por la consulta
        return resultado.rows; // Devuelve las filas obtenidas de la consulta
    }catch (error) {
        console.error('Error al consultar los cursos:', error); // Imprime un mensaje de error si la consulta falla
    }
    finally {
        await cliente.end(); // Cierra la conexión al cliente de PostgreSQL
    }
}

