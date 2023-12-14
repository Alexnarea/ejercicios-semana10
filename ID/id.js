"use strict"
let url = "https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link";

let indiceInicio = url.indexOf("/d/") + 3;
let indiceFin = url.indexOf("/", indiceInicio);

let idGoogleDrive = (indiceInicio !== -1 && indiceFin !== -1) ? url.slice(indiceInicio, indiceFin) : null;

alert(idGoogleDrive);
