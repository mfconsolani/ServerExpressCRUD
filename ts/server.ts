import express, {Application, Request, Response} from 'express';
import MetodosServidor, { Product } from './handlerClass';
import { router } from './products'


// Server set-up
const app:Application = express();

const PORT = 8080;

// Global variables

// Middleware

app.use(express.static(__dirname + '/public'))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

// Server Port config

const server:any = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${server.address().port}`)
});

server.on("Error", (error:Error) => {
    console.log(`Se produjo el siguiente error al inicializar el servidor: ${error}`)
});

// Router

app.use('/api', router);


