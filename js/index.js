function acceso () {
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

acceso()