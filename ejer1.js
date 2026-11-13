
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function convertirUSDToEUR(dolares) {
    return dolares * 0.92;
}


function convertirUSDToJPY(dolares) {
    return dolares * 150;
}


function mostrarTicketDivisas(dolares, euros, yenes) {

    console.log("\n==================================");
    console.log("       TICKET DE DIVISAS");
    console.log("==================================");
    console.log("Dolares:       $" + dolares.toFixed(2));
    console.log("Euros:         €" + euros.toFixed(2));
    console.log("Yenes:         ¥" + yenes.toFixed(2));
    console.log("==================================");
}


rl.question("Ingrese la cantidad en dolares: $", (respuesta) => {

    let dolares = Number(respuesta);

    if (respuesta.trim() === "" || !Number.isFinite(dolares) || dolares < 0) {
        console.log("Error: Ingrese una cantidad valida.");
        rl.close();
        return;
    }

    let euros = convertirUSDToEUR(dolares);
    let yenes = convertirUSDToJPY(dolares);

    mostrarTicketDivisas(dolares, euros, yenes);

    rl.close();
});
