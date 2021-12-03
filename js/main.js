/*Inportacion de modulos */

import countDown from "./countDown.js";
//import userDeviceInfo from "./detectionDevice.js";
//import MoveBall from "./keys.js";
import hamburgerMenu from "./menu.js";

import digitalClock, { alarm } from "./reloj.js";
//import responsive from "./responsive.js";
import responsiveT from "./responsiveTester.js";
import networkDetect from "./redDetetection.js";
import darkMode from "./themeDark.js";
import validation from "./validation.js";
//import camDetect from "./camDetetction.js";
//import Geo from "./geolocation.js";
//import filterCard from "./filterCards.js";
//import smathVideo from "./smartVideo.js";

const d = document;
d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#clock", "#active", "#stop");
    alarm("#enable-alarm", "#disable-alarm", "assets/audios/car-alarm.mp3");
    countDown('count-down', 'November 27 2021 15:53:45', 'Feliz cumpleanios');
    //   responsive("youtube", "(min-width:1024px)", `<a href = "https://www.youtube.com/watch?v=FgQR2O8PGf4&ab_channel=TWINENGINE"  target="_blank" rel "noopeer">Ver video</a> `, `<iframe width="560" height="315" src="https://www.youtube.com/embed/FgQR2O8PGf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    //   responsive("gmaps", "(min-width:1024px)", `<a href = "https://goo.gl/maps/jgH2mmn3DbWriN5x7" target="_blank" rel "noopeer">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.1437545464587!2d-71.66816658474814!3d-35.42646878025449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9665c6a014abd285%3A0x444443c9367d5a75!2sPlaza%20De%20Armas%20de%20Talca!5e0!3m2!1ses!2scl!4v1637182874153!5m2!1ses!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);
    responsiveT("responsiveTester");
    //   userDeviceInfo("user-device");
    //camDetect('camera');
    //Geo('geolocation');
    //filterCard('.card-filter', '.card');
    // smathVideo()
    validation()

});


d.addEventListener("keydown", e => {

    //MoveBall(e, '.stage', '.ball')


});


networkDetect();
darkMode(".dark-theme-btn", "dark-mode");