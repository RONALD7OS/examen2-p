let nombres = [];
function Crearnombre() {
    let nombre = prompt("ingrese un nombre: ")
    nombres.push(nombre)
}
function Eliminarnombre() {
    let nombre = prompt("ingrese la inicial del nombe que desea eliminar");
    nombres.splice(nombre, 1);
}
function Mostrarnombres() {
    nombres.forEach(nombres => { console.log(nombres); });
}
function actualizarnombre() {
    let nombre = prompt("ingrese la inicial del nombre a actualizar");
    let nuevitonombres = prompt("ingrese el nuevo nombre: ")
    nombres[nombre] = nuevitonombres;
}
function menu() {
    console.log("menu de opciones:");
    console.log("1:crear nombre");
    console.log("2:eliminar nombre");
    console.log("3:actualizar nombre");
    console.log("4:mostar nombre ");
    let opcion = prompt("selecione una opcion: ")
    do {
        switch (opcion) {
            case "1":
                Crearnombre();
                break;
            case "2":
                Eliminarnombre();
                break;
            case "3":
                actualizarnombre();
                break;
            case "4":
                Mostrarnombres();
                break;
                case"5":
                console.log("bye");
                break;
            default:
                alerta("error");
                break;
        }
    } while(opcion!=="opcion");
}
menu()