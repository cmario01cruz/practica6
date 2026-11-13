
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
);


const tarifaKwh = 0.15;

function calcularCostoConsumo(kwh) {
    return kwh * tarifaKwh;
}


function calcularTasaServicios(subtotal) {
    return subtotal * 0.08;
}


function calcularTotalFactura(subtotal, tasa) {
    return subtotal + tasa;
}


function imprimirFacturaLuz(kwh, subtotal, tasa, total) {

    console.log("\n==================================");
    console.log("       FACTURA ELECTRICA");
    console.log("==================================");
    console.log("Consumo:          " + kwh + " kWh");
    console.log("Tarifa por kWh:   $" + tarifaKwh.toFixed(2));
    console.log("----------------------------------");
    console.log("Costo consumo:    $" + subtotal.toFixed(2));
    console.log("Tasa servicios:   $" + tasa.toFixed(2));
    console.log("----------------------------------");
    console.log("TOTAL A PAGAR:    $" + total.toFixed(2));
    console.log("==================================");
}

rl.question("Ingrese los kWh consumidos: ", (respuesta) => {

    let kwh = Number(respuesta);

    if (respuesta.trim() === "" || !Number.isFinite(kwh) || kwh < 0) {
        console.log("Error: Ingrese una cantidad valida de kWh.");
        rl.close();
        return;
    }

    let subtotal = calcularCostoConsumo(kwh);

    let tasa = calcularTasaServicios(subtotal);

    let total = calcularTotalFactura(subtotal, tasa);

    imprimirFacturaLuz(kwh, subtotal, tasa, total);

    rl.close();
});
