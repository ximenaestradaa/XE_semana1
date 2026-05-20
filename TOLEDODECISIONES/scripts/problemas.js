function votar31() {
    let edad = parseInt(document.getElementById("edad").value);
    let res = (edad >= 18) ? "Puedes votar" : "No puedes votar todavía";
    document.getElementById("resultado").innerHTML = res;
}

function sueldo32() {
    let horas = parseFloat(document.getElementById("horas").value);
    let pago = parseFloat(document.getElementById("pago").value);
    let sueldo = 0;
    if (horas <= 40) {
        sueldo = horas * pago;
    } else {
        sueldo = (40 * pago) + ((horas - 40) * (pago * 2));
    }
    document.getElementById("resultado").innerHTML = "Sueldo Semanal: $" + sueldo;
}

function regalo33() {
    let dinero = parseFloat(document.getElementById("dinero").value);
    let regalo = "";
    if (dinero <= 10) regalo = "Tarjeta";
    else if (dinero <= 100) regalo = "Chocolates";
    else if (dinero <= 250) regalo = "Flores";
    else regalo = "Anillo";
    document.getElementById("resultado").innerHTML = "Regalo posible: " + regalo;
}

function estacionamiento34() {
    let horas = Math.ceil(parseFloat(document.getElementById("horas").value));
    let total = 0;
    if (horas <= 2) total = horas * 5;
    else if (horas <= 5) total = (2 * 5) + (horas - 2) * 4;
    else if (horas <= 10) total = (2 * 5) + (3 * 4) + (horas - 5) * 3;
    else total = (2 * 5) + (3 * 4) + (5 * 3) + (horas - 10) * 2;
    document.getElementById("resultado").innerHTML = "Total a pagar: $" + total;
}

function menor35() {
    let n1 = document.getElementById("n1").value, e1 = parseInt(document.getElementById("e1").value);
    let n2 = document.getElementById("n2").value, e2 = parseInt(document.getElementById("e2").value);
    let n3 = document.getElementById("n3").value, e3 = parseInt(document.getElementById("e3").value);
    let mNom = n1, mEd = e1;
    if (e2 < mEd) { mNom = n2; mEd = e2; }
    if (e3 < mEd) { mNom = n3; mEd = e3; }
    document.getElementById("resultado").innerHTML = "La persona menor es: " + mNom + " (" + mEd + " años)";
}

function descuento36() {
    let precio = parseFloat(document.getElementById("precio").value);
    let desc = 0;
    if (precio >= 200) desc = 0.15;
    else if (precio > 100) desc = 0.12;
    else desc = 0.10;
    let total = precio - (precio * desc);
    document.getElementById("resultado").innerHTML = "Precio con descuento: $" + total.toFixed(2);
}

function beca37() {
    let edad = parseInt(document.getElementById("edad").value);
    let prom = parseFloat(document.getElementById("prom").value);
    let monto = "";
    if (edad > 18) {
        if (prom >= 9) monto = "$2000";
        else if (prom >= 7.5) monto = "$1000";
        else if (prom >= 6) monto = "$500";
        else monto = "Carta de invitación";
    } else {
        if (prom >= 9) monto = "$3000";
        else if (prom >= 8) monto = "$2000";
        else if (prom >= 6) monto = "$100";
        else monto = "Carta de invitación";
    }
    document.getElementById("resultado").innerHTML = "Resultado: " + monto;
}

function bono38() {
    let ant = parseInt(document.getElementById("ant").value);
    let sueldo = parseFloat(document.getElementById("sueldo").value);
    let bAnt = (ant > 2 && ant < 5) ? sueldo * 0.20 : (ant >= 5 ? sueldo * 0.30 : 0);
    let bSuel = (sueldo < 1000) ? sueldo * 0.25 : (sueldo <= 3500 ? sueldo * 0.15 : sueldo * 0.10);
    let mayor = Math.max(bAnt, bSuel);
    document.getElementById("resultado").innerHTML = "Bono asignado: $" + mayor;
}

function poliza39() {
    let tipo = document.getElementById("tipo").value;
    let alcohol = document.getElementById("alcohol").checked;
    let lentes = document.getElementById("lentes").checked;
    let enf = document.getElementById("enf").checked;
    let edad = parseInt(document.getElementById("edad").value);
    let costo = (tipo === 'A') ? 1200 : 950;
    let cargos = 0;
    if (alcohol) cargos += costo * 0.10;
    if (lentes) cargos += costo * 0.05;
    if (enf) cargos += costo * 0.05;
    cargos += (edad > 40) ? costo * 0.20 : costo * 0.10;
    document.getElementById("resultado").innerHTML = "Total Póliza: $" + (costo + cargos);
}

function vacaciones310() {
    let dinero = parseFloat(document.getElementById("dinero").value);
    let destino = "Quedarse en casa";
    if (dinero >= (1800 * 2)) destino = "Cancún";
    else if (dinero >= (1200 * 2)) destino = "Acapulco";
    else if (dinero >= (800 * 2)) destino = "P.V.";
    else if (dinero >= (750 * 2)) destino = "México";
    document.getElementById("resultado").innerHTML = "Destino: " + destino;
}

function bono311() {
    let ant = parseInt(document.getElementById("ant").value);
    let bono = 0;
    if (ant >= 1 && ant <= 5) bono = ant * 100;
    else if (ant > 5) bono = 1000;
    document.getElementById("resultado").innerHTML = "Bono: $" + bono;
}

function sueldo312() {
    let horas = parseFloat(document.getElementById("horas").value);
    let pago = parseFloat(document.getElementById("pago").value);
    let sueldo = 0;
    if (horas > 50) {
        document.getElementById("resultado").innerHTML = "No está permitido trabajar más de 50 horas";
        return;
    }
    if (horas <= 40) sueldo = horas * pago;
    else if (horas <= 45) sueldo = (40 * pago) + (horas - 40) * (pago * 2);
    else sueldo = (40 * pago) + (5 * (pago * 2)) + (horas - 45) * (pago * 3);
    document.getElementById("resultado").innerHTML = "Sueldo: $" + sueldo;
}

function viaje313() {
    let alumnos = parseInt(document.getElementById("alumnos").value);
    let costo = 0;
    if (alumnos > 100) costo = 20;
    else if (alumnos >= 50) costo = 35;
    else if (alumnos >= 20) costo = 40;
    else costo = 70;
    document.getElementById("resultado").innerHTML = "Costo por alumno: $" + costo;
}