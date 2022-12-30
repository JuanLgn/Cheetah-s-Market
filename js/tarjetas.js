function cardsHtml ( array ) {
    
    const contenedor = document.querySelector(".container")

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
                <button class="likebutton">
                    ♥
                </button>
                <button class="likebutton2">
                    🛒
                </button>
            </div>
        `
        contenedor.appendChild(card)
    })

}

cardsHtml(productos)

