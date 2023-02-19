class ProductManager{
    constructor(){
        this.products = []
    }
    getProduct(){

       return this.products
    }

    addProduct(newProduct){
         if (!this.products.find((product) => product.code === newProduct.code)) {
            newProduct['id'] = this.increaseId();
            this.products.push(newProduct);
        } 
    }    
    //Use una guia de stack overflow para hacerlo
    increaseId = () => {
        const count = this.products.length;
        const idIcrease = (count > 0) ? this.products[count - 1].id + 1 : 1;

        return idIcrease;
    }
    
    getProductById(id) {
        if (this.products.find((product) => product.id === id)) {

            return this.products.find((product) => product.id === id);
         } 
        else {

             return 'Not found';
         }
     }    
}

class Product{
    
    constructor(title, description, price, thumbnail, code, stock){
        this.title = title 
        this.description = description
        this.price = price
        this.thumbnail = thumbnail 
        this.code = code 
        this.stock = stock 
    }       
       }
 
//PRUEBAS

const product0 = new Product("Copa de crital", "El cristal mas fino", "1200", "Not Found","0","138");

const product1 = new Product("Vaso Cervezero","El mas grande el mercado", "900", "Not Found", "1", "93");

const product2 = new Product("Vaso", "Tamaño de 250ml ", "500", "Not Found", "2", "600");

const prueba = new ProductManager();

prueba.addProduct(product0)
prueba.addProduct(product1)
prueba.addProduct(product2)

console.log(prueba.getProduct())
console.log(prueba.getProductById(1))
console.log(prueba.getProductById(2))