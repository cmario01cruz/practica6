
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calcularCostoBase(pesoKg, distanciaKm) {
    return (pesoKg * 2) + (distanciaKm * 0.10);
}


function calcularSeguroEnvio(costoBase) {
    return costoBase * 0.05;
}


function calcularTotalEnvio(costoBase, seguro) {
    return costoBase + seguro;
}


function mostrarGuiaEnvio(peso, distancia, base, seguro, total) {

    console.log("\n==================================");
    console.log("        GUIA DE ENVIO EXPRESS");
    console.log("==================================");
    console.log("Peso del paquete:  " + peso + " kg");
    console.log("Distancia:         " + distancia + " km");
    console.log("----------------------------------");
    console.log("Costo base:        $" + base.toFixed(2));
    console.log("Seguro (5%):       $" + seguro.toFixed(2));
    console.log("----------------------------------");
    console.log("TOTAL DEL ENVIO:   $" + total.toFixed(2));
    console.log("==================================");
}


rl.question("Ingrese el peso del paquete en kg: ", (respuestaPeso) => {

    let peso = Number(respuestaPeso);

    if (respuestaPeso.trim() === "" || !Number.isFinite(peso) || peso <= 0) {
        console.log("Error: El peso debe ser mayor a cero.");
        rl.close();
        return;
    }

    rl.question("Ingrese la distancia en km: ", (respuestaDistancia) => {

        let distancia = Number(respuestaDistancia);

        if (
            respuestaDistancia.trim() === "" ||
            !Number.isFinite(distancia) ||
            distancia <= 0
        ) {
            console.log("Error: La distancia debe ser mayor a cero.");
            rl.close();
            return;
        }

        let base = calcularCostoBase(peso, distancia);

        let seguro = calcularSeguroEnvio(base);

        let total = calcularTotalEnvio(base, seguro);

        mostrarGuiaEnvio(peso, distancia, base, seguro, total);

        rl.close();
    });
});
