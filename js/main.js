/*Inportacion de modulos */

import MoveBall from "./keys.js";
import hamburgerMenu from "./menu.js";
import digitalClock, { alarm } from "./reloj.js";

const d = document;
d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#clock", "#active", "#stop");
    alarm("#enable-alarm", "#disable-alarm", "assets/audios/car-alarm.mp3");
})

d.addEventListener("keydown", e => {

    MoveBall(e, '.stage', '.ball')

})