// AQUÍ ESTÁ LA PRIMER ENTREGA, LA COMENTO YA QUE NO ESTARÉ UTILIZANDO ESTE CÓDIGO PERO NO SÉ SI DEBERÍA
// DEJARLO COMENTADO O NO

/* function acceso () {
    const userEmail = "juanchito@gmail.com"
    const userName = "Juancho"
    const userPassword = "juanchito986"


        const email = prompt ( "Ingrese su email")
        const user = prompt ( "Ingrese su nombre" )
        const password = prompt ( "Ingrese su contraseña" )

    if (  userEmail === email &&  userName === user && userPassword === password) {

    alert( `Bienvenido a NatMax ${userName}, ahora tienes acceso` )
    console.log( `${userName} se ha logeado`)

    } else {

    alert( "Lamentablemente los datos introducidos son erróneos" )
    console.log( `${userName} ha introducido sus datos de forma errónea`)
    }

    const edadMinima = 18
    const edad = prompt ( "Antes de acceder a nuestra página nos gustaria saber tu edad")

    if ( edad >= edadMinima) {
    
        alert ( "Excelente! Se han habilitado todas las secciones")
    
        console.log ( `Al parecer el usuario que acaba de ingresar tiene ${edad} años` )

    } else {

        alert ("Al parecer no cuentas con más de 18 años, por lo cuál se te ha habilitado sólamente la sección Kids")
        
        console.log( `${userName} se cuenta con la edad mínima`)

    }
}

acceso() */


// A CONTINUACIÓN, LOS PRODUCTOS QUE OFRECE MI TIENDA

function productosQueOfrecemos() {
const productos = [
    {
        id: 01,
        producto: "Arbusto de Arándanos",
        precio: 1500,
        vencimiento: false,
        descripcionCorta: "Arbusto de Arándanos una fruta extremadamente rica en vitaminas A, B y C y claramante en sabor.",
        categoría: "Frutas",
        oferta: false
    },
    {
        id: 02,
        producto: "Bananero",
        precio: 1590,
        vencimiento: false,
        descripcionCorta: "La planta de banano es una hierba perenne de gran tamaño. Se la considera una hierba porque sus partes aéreas mueren y caen al suelo cuando termina la estación de cultivo, y es perenne porque de la base de la planta surge un brote llamado hijo, que reemplaza a la planta madre.",
        categoría: "Frutas",
        oferta: false
    },
    {
        id: 03,
        producto: "Manzano",
        precio: 1500,
        vencimiento: false,
        descripcionCorta: "Arboles frutales de manzana Red Chief, muy similar a la Red deliciosa, miden 2 a 2.2m aprox. Edad 4 años. Son plantas injertadas y certificadas por inase.",
        categoría: "Frutas",
        oferta: false
    },
    {
        id: 04,
        producto: "Mesa de Comedor",
        precio: 39900,
        vencimiento: false,
        descripcionCorta: "Mesa cuadrada en MDF y revestimiento en madera.",
        categoría: "Muebles",
        oferta: true
    },
    {
        id: 05,
        producto: "Silla de Comedor",
        precio: 2500,
        vencimiento: false,
        descripcionCorta: "Silla de comedor Garden Life Tolix asiento de madera, estructura color negro mate.",
        categoría: "Muebles",
        oferta: true
    },
    {
        id: 06,
        producto: "Cortina Mosquitera",
        precio: 220,
        vencimiento: false,
        descripcionCorta: "Cortina mosquitera Magic Mesh Puerta anti Mosquitos y Moscas",
        categoría: "Decoracion",
        oferta: false
    },
    {
        id: 07,
        producto: "Máscara de Zombie",
        precio: 179,
        vencimiento: false,
        descripcionCorta: "La mejor forma de disfrutar halloween es disfrazándote y aquí te ofrecemos una Máscara de Zombie con ojos saltones de plástico!",
        categoría: "Máscaras",
        oferta: false
    },
    {
        id: 08,
        producto: "Sobres Mundial Qatar",
        precio: 35,
        vencimiento: false,
        descripcionCorta: "Qué mejor forma de disfrutar el mundial de Qatar 2022 coleccionando los stickers, adquiere ya los sobres de stickers del mundial y completa tu album!",
        categoría: "Estampas",
        oferta: false
    },
        {
        id: 09,
        producto: "Tenis Nike Air Monarch",
        precio: 4875,
        vencimiento: false,
        descripcionCorta: "Tenis Nike Air Monarch Iv (4E) Cross masculino talle 8.5 USA / 40 BR",
        categoría: "Ropas",
        oferta: true
    },
    {
        id: 10,
        producto: "Musculosa",
        precio: 590,
        vencimiento: false,
        descripcionCorta: "Remera sin mangas 100% algodón, contamos con una gran variedad de talles.",
        categoría: "Ropas",
        oferta: false
    },
    {
        id: 11,
        producto: "Papas Lays",
        precio: 540,
        vencimiento: true,
        descripcionCorta: "Papas Lays Clasicas Grande 400gr X2u-",
        categoría: "Comida",
        oferta: false
    },
    {
        id: 12,
        producto: "Mantequilla de Maní",
        precio: 450,
        vencimiento: true,
        descripcionCorta: "1000 G Mantequilla De Mani (1kg, Pasta, Manteca, Maní)",
        categoría: "Comida",
        oferta: false
    },
    
    
]

console.log(productos)
console.table(productos)

}

productosQueOfrecemos() 


// SIMULACIÓN DE FRUTERÍA EN MI TIENDA

function fruteria() {

    const frutas = [ "Naranja"/*0*/, "Banana"/*1*/, "Manzana"/*2*/, "Kiwi"/*3*/, "Frutilla"/*4*/, "Uva"/*5*/, "Sandía"/*6*/]
    console.log(frutas)

// Simulando que ahora tenemos stock de cerezas
    const añadirSinRemover = frutas.splice(1, 0, "cerezas")
    console.log(frutas)


// REVISIÓN DE STOCK DE FRUTAS MEDIANTE "INCLUDES"

  console.log(frutas.includes("Naranja")) // Me da true(boolean) ya que si hay stock de Naranjas
  console.log(frutas.includes("Banana")) // Me da true ya que si hay stock de Banana
  console.log(frutas.includes("Ananá")) // Me da false ya que no hay stock de Ananá
  console.log(frutas.includes("Manzana")) // Me da true ya que si hay stock de Manzanas
  console.log(frutas.includes("Peras")) // Me da false ya que no hay stock de Peras
  console.log(frutas.includes("Melón")) // Me da false ya que no hay stock de Melones
  console.log(frutas.includes("Frutilla")) // Me da true ya que si hay stock de Frutillas
  console.log(frutas.includes("Uva")) // Me da true ya que si hay stock de Uvas
  console.log(frutas.includes("Sandía")) // Me da true ya que si hay stock de Sandías
}
fruteria()