// SECCIÓN DE VENTAS AL DARLE CLICK A "¿Deseas vender tu propio producto?" en el HTML

alert("Saludos! Bienvenido a la sección de ventas, aquí podrás publicar tu producto")
let nombreProducto = "";
let descripcion = "";
let precio = 0;

let validar = prompt('Ingrese cualquier tecla para cargar el producto');

var lista = '';

while (validar = 'ESC') {

    function producto (nombreProducto, descripcion, precio){
        var nombreProducto = prompt('Ingrese el nombre de su producto');
        var descripcion = prompt('Ingrese una breve descripción');
        var precio = (prompt('Ingrese el precio de su producto (Sin iva)'));
        let lista = "Producto : " + nombreProducto + " Descripción : " + descripcion + " Precio : " + precio;
        console.log(lista)
        if (nombreProducto != "" && descripcion != "" && precio != ""){
            alert("Producto : " + nombreProducto + " Descripción : " + descripcion + " Precio : " + precio);
        }else{
            alert('No has introducido los datos de forma correcta');
        }
        validar = alert('Perfecto! Si acabas de publicar tu producto te deseamos mucha suerte con las ventas');
        return lista;

    }
    producto();
    break;
}
