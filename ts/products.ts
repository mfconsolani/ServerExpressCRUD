import express, {Request, Response} from 'express';
import { builtinModules } from 'module';
import MetodosServidor, { Product } from './handlerClass';

export const router = express.Router();

let db:Array<Product> = [];

let instance = new MetodosServidor(db);

// Get requests

// Listar todos los productos
router.get('/productos', (req: Request, res: Response) => {    
    instance.displayAll(res);
});

// Listar un producto específico
router.get('/productos/:id', (req: Request, res: Response) => {
    instance.displayOne(req, res);    
});


// Post requests

// Cargar un nuevo producto
router.post('/productos/', (req: Request, res: Response)=> { 
    instance.saveProduct(req, res)
});

// Put requests

// Reemplzar datos

router.put('/productos/:id', (req: Request, res: Response)=> {
    instance.replaceData(req, res);
})

// Delete requests

// Elimina un producto

router.delete('/productos/:id', (req: Request, res: Response) => {
    instance.deleteItem(req, res)
})
