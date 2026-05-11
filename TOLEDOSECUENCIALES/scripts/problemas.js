function agua(){

    let metros = parseFloat(document.getElementById("metros").value);

    let costo = parseFloat(document.getElementById("costo").value);

    let total = metros * costo;

    document.getElementById("resultado").innerHTML =
    "Pago de agua: $" + total;
}

function luz(){

    let kw = parseFloat(document.getElementById("kw").value);

    let costo = parseFloat(document.getElementById("costo").value);

    let total = kw * costo;

    document.getElementById("resultado").innerHTML =
    "Pago de luz: $" + total;
}

function articulo(){

    let precio = parseFloat(document.getElementById("precio").value);

    let descuento = precio * 0.20;

    let nuevo = precio - descuento;

    let iva = nuevo * 0.15;

    let final = nuevo + iva;

    document.getElementById("resultado").innerHTML =
    "Precio final: $" + final;
}

function ahorro(){

    let sueldo = parseFloat(document.getElementById("sueldo").value);

    let ahorro = sueldo * 0.15;

    let anual = ahorro * 4 * 12;

    document.getElementById("resultado").innerHTML =
    "Ahorro anual: $" + anual;
}

function cheque(){

    let hotel = parseFloat(document.getElementById("hotel").value);

    let comida = parseFloat(document.getElementById("comida").value);

    let dias = parseFloat(document.getElementById("dias").value);

    let otros = dias * 100;

    let total = hotel + comida + otros;

    document.getElementById("resultado").innerHTML =
    "Monto cheque: $" + total;
}

function potencia(){

    let r = parseFloat(document.getElementById("r").value);

    let i = parseFloat(document.getElementById("i").value);

    let v = r * i;

    let p = v * i;

    document.getElementById("resultado").innerHTML =
    "Potencia: " + p;
}

function cuadrado(){

    let lado = parseFloat(document.getElementById("lado").value);

    let area = lado * lado;

    document.getElementById("resultado").innerHTML =
    "Área: " + area;
}

function promedio(){

    let e1 = parseFloat(document.getElementById("e1").value);

    let e2 = parseFloat(document.getElementById("e2").value);

    let e3 = parseFloat(document.getElementById("e3").value);

    let prom = (e1 * 0.25) + (e2 * 0.25) + (e3 * 0.50);

    document.getElementById("resultado").innerHTML =
    "Promedio: " + prom;
}

function vida(){

    let edad = parseFloat(document.getElementById("edad").value);

    let meses = edad * 12;

    let semanas = edad * 52;

    let dias = edad * 365;

    let horas = dias * 24;

    document.getElementById("resultado").innerHTML =
    "Meses: " + meses +
    " Semanas: " + semanas +
    " Días: " + dias +
    " Horas: " + horas;
}

function llamada(){

    let minutos = parseFloat(document.getElementById("minutos").value);

    let costo = parseFloat(document.getElementById("costo").value);

    let total = minutos * costo;

    document.getElementById("resultado").innerHTML =
    "Costo llamada: $" + total;
}

function hotel(){

    let dias = parseFloat(document.getElementById("dias").value);

    let costo = parseFloat(document.getElementById("costo").value);

    let total = dias * costo;

    document.getElementById("resultado").innerHTML =
    "Total hotel: $" + total;
}
function triangulo(){

    let base = parseFloat(document.getElementById("base").value);

    let altura = parseFloat(document.getElementById("altura").value);

    let area = (base * altura) / 2;

    document.getElementById("resultado").innerHTML =
    "Área: " + area;
}

function dolares(){

    let pesos = parseFloat(document.getElementById("pesos").value);

    let cambio = parseFloat(document.getElementById("cambio").value);

    let dolares = pesos / cambio;

    document.getElementById("resultado").innerHTML =
    "Dólares: " + dolares;
}

function edad(){

    let nacimiento = parseFloat(document.getElementById("nacimiento").value);

    let actual = parseFloat(document.getElementById("actual").value);

    let edad = actual - nacimiento;

    document.getElementById("resultado").innerHTML =
    "Edad: " + edad;
}

function estacionamiento(){

    let horas = parseFloat(document.getElementById("horas").value);

    let costo = parseFloat(document.getElementById("costo").value);

    let total = Math.ceil(horas) * costo;

    document.getElementById("resultado").innerHTML =
    "Total: $" + total;
}

function pintura(){

    let metros = parseFloat(document.getElementById("metros").value);

    let precio = parseFloat(document.getElementById("precio").value);

    let total = metros * precio;

    document.getElementById("resultado").innerHTML =
    "Presupuesto: $" + total;
}

function hipotenusa(){

    let a = parseFloat(document.getElementById("a").value);

    let b = parseFloat(document.getElementById("b").value);

    let c = Math.sqrt((a*a) + (b*b));

    document.getElementById("resultado").innerHTML =
    "Hipotenusa: " + c;
}

function autobus(){

    let km = parseFloat(document.getElementById("km").value);

    let costo = parseFloat(document.getElementById("costo").value);

    let total = km * costo;

    document.getElementById("resultado").innerHTML =
    "Costo boleto: $" + total;
}

function bicicleta(){

    let distancia = parseFloat(document.getElementById("distancia").value);

    let velocidad = parseFloat(document.getElementById("velocidad").value);

    let tiempo = distancia / velocidad;

    document.getElementById("resultado").innerHTML =
    "Tiempo: " + tiempo + " horas";
}