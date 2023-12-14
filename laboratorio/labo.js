"use strict"
let cadena = "LAB2#C";

let indiceNum = cadena.indexOf('LAB') + 3;
let indiceLetra = cadena.indexOf('#') + 1;

let numeroLaboratorio = +cadena.slice(indiceNum, indiceLetra - 1);
let letraActual = cadena.slice(indiceLetra, indiceLetra + 1).toUpperCase();

let siguienteCodePoint = (letraActual >= 'a' && letraActual < 'z' && (letraActual.codePointAt(0) + 1) > 'z'.codePointAt(0)) ?
    'A'.codePointAt(0) : letraActual.codePointAt(0) + 1;
    
alert("laboratorio: " + String.fromCodePoint(siguienteCodePoint));
