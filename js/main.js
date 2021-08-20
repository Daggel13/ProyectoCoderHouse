const producto_uno = new Producto ('Pestañas Clasicas', 1400, 'Dos horas');
const producto_dos = new Producto ('Pestañas 3D', 1400, 'Dos horas');
const producto_tres = new Producto ('Pestañas 4D', 1600, '2 y 1/2 horas');
const producto_cuatro = new Producto ('Pestañas 6D', 1800, '2 y 1/2 horas');

const baseDeDatos = [producto_uno, producto_dos, producto_tres, producto_cuatro,];

const carrito = [];

let acumulador = ``;
baseDeDatos.forEach((producto) => {
    acumulador += `<div>
    <h3>${producto.title}</h3>
    <p>${producto.price}</p>
    <p>${producto.time}</p>`
});

document.write(acumulador);