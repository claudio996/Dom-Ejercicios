/*Inportacion de modulos */

import countDown from "./countDown.js";
import MoveBall from "./keys.js";
import hamburgerMenu from "./menu.js";
import digitalClock, { alarm } from "./reloj.js";

const d = document;
d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#clock", "#active", "#stop");
    alarm("#enable-alarm", "#disable-alarm", "assets/audios/car-alarm.mp3");
    countDown('count-down', 'November 27 2021 15:53:45', 'Feliz cumpleanios');
})

d.addEventListener("keydown", e => {

    MoveBall(e, '.stage', '.ball')

})