class ProductManager{
    
    products = [];

    constructor(){}
     
       addProduct(title, description, price, thumbail, code, stock){
        if(typeof title !== undefined && typeof description !== undefined && typeof price !== undefined && typeof thumbnail !== undefined && typeof code !== undefined && typeof stock !== undefined ){
    const product = {
        title,
        description,
        price: `$ ${price}`,
        thumbail,
        code,
        stock,
        id : this.products.length
    }

    let verificar = Object.values(product)
    let sameCode = this.products.find( prod => prod.code === code)

    if (verificar.includes(undefined) === true){
        console.log(`El producto ${product.title} NO ha sido cargado, debe completar todos los datos.`)
    }else if(sameCode){
        console.log(`El producto ${product.title} NO ha sido cargado ya que la propiedad "code" está repetida, ${sameCode.title} tiene el mismo valor.`)
    }else{
        this.products.push(product)
        console.log(`${product.title} cargado correctamente.`)
    }
    
    }

    
}

getProducts(){
    return this.products
}


getProductById(id){
    let element = this.products.find(prod => prod.id === id)
    if (element){
        return element
    } else {
        return "Not Found"
    }
}
}
const manager = new ProductManager();

manager.addProduct("Remera roja", "Descripcion de remera" , 12000, "ruta de imagen", 0, 10)
manager.addProduct("Remera Azul", "Descripcion de remera", 33000, "ruta de imagen", 1, 15)
manager.addProduct("Remera Amarilla", "descripcion de remera", 19000, "ruta de imagen",2,7)
console.log(manager.getProductById())
