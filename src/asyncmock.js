const products = [
    { id: "1", nombre: "Barcelona", precio: 3750, stock:10, img: "../CamisetasDeFutbol/BarcelonaVintage.jpg", idCat: "2" },
    { id: "2", nombre: "Boca Juniors", precio: 7000, stock:10, img: "../CamisetasDeFutbol/BocaJuniorsVintage.jpg", idCat: "2" },
    { id: "3", nombre: "Brasil", precio: 6000, stock:5, img: "../CamisetasDeFutbol/Brazil.jpg", idCat: "1" },
    { id: "4", nombre: "Chelsea", precio: 3000, stock:10, img: "../CamisetasDeFutbol/Chelseaa.jpg", idCat: "1" },
    { id: "5", nombre: "Francia Retro", precio: 2590, stock:10, img: "../CamisetasDeFutbol/Francee.jpg", idCat: "2" },
    { id: "6", nombre: "Manchester United", precio: 5000, stock:10, img: "../CamisetasDeFutbol/ManchesterUnited.jpg", idCat: "1" },
    { id: "7", nombre: "Milan", precio: 4580, stock:10, img: "../CamisetasDeFutbol/Milan.jpg", idCat: "2" },
    { id: "8", nombre: "Paises Bajos", precio: 4000, stock:10, img: "../CamisetasDeFutbol/NetherlandsVintage.jpg", idCat: "2" },
    { id: "9", nombre: "Real Madrid", precio: 6500, stock:10, img: "../CamisetasDeFutbol/realMadridvintage.jpg", idCat: "2" },
    
]

/** idCat referencias: 1-Camisetas actuales.
*                      2-Camisetas Retro.
 */

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 100)
    })
}

//Creamos una nueva funcion similar pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = products.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })

}

//Creamos una función que retorna toda la categoria

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout(()=>{
            const productosCategoria=products.filter(prod=>prod.idCat===idCategoria);
            resolve(productosCategoria);
        },100)
    })

}