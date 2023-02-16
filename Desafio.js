import { randomUUID } from 'crypto'

class ProductManager{
    products
    constructor(){
        this.products = []
    }
    getProduct(){
       return this.products
    }
    addProduct(newProduct){
        const product = this.products.find((product => product.code === newProduct.code))
        if
        (product){
            console.log("Este producto ya se encuentra registrado")
        }else{
            this.products.push(newProduct)
            console.log("El producto se agrego con exito")
        }               
    }
    getProductById(id){
        const product = this.products.find((product => product.id === id));
        if
        (product){
            console.log("El producto consultado es: ", product)
        }
    }
}

class Product{
    
    constructor(title, description, price, thumbnail, code, stock, id){
        this.id = id || randomUUID()
        this.title = title 
        this.description = description
        this.price = price
        this.thumbnail = thumbnail 
        this.code = code 
        this.stock = stock 
    }   
       }
 
//PRUEBAS

const prueba = new ProductManager;

console.log( prueba.getProduct());

prueba.addProduct(new Product("Vaso", "Vaso de Crystal", 1250, "Sin Imagen", "crystalbc", 250))

console.log(prueba.getProduct());

const productoAgregado = prueba.getProduct() 
const idCreado = productoAgregado[0].id;
const idNoencontrado = "6s45d65shnsu7623sad24"

prueba.getProductById(idCreado);

prueba.getProductById(idNoencontrado);