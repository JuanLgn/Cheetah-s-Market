let infoDelLs = JSON.parse(localStorage.getItem("carrito"))

function cardsHtml ( array ) {
    
    const contenedor = document.querySelector(".carrito-contenedor")

    array.map( ( productos ) => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <div class ="container-img">
                <img class="imgcard" src=${productos.img} alt=${productos.nombre}>
            </div>
            <h2 class="prd-nombre">
                ${productos.nombre}
            </h2>
            
            <h3 class="prd-precio">
                $${productos.precio}
            </h3>
            <div class="divbuttons">
                <button id="boton-${productos.id}" class="likebutton2">
                    ❌
                </button>
            </div>
        `
        contenedor.appendChild(card)
    })

}

cardsHtml(infoDelLs || [])


function borrarDelCarrito (array) {
    const botonAniadir = document.querySelectorAll(".likebutton2")
    botonAniadir.forEach( boton => {
        boton.onclick = () => {
            const id = boton.id.slice(6)
            const filtrarProducto = array.filter((elemento, i) => {
                return elemento.id != Number(id)
            })
            infoDelLs = filtrarProducto
            localStorage.setItem("carrito", JSON.stringify(infoDelLs))
            console.log(infoDelLs)
            cardsHtml(infoDelLs)
            borrarDelCarrito(infoDelLs)

            
        }
    })
}

borrarDelCarrito(infoDelLs )

const botonBorrarTodo = document.querySelector("#borrar-productos")

botonBorrarTodo.onclick = () => {
    localStorage.removeItem("carrito")
    document.querySelector("carrito-contenedor").innerHTML = "No hay productos"
}