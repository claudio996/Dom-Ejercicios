/*Este ejercicio contiste en en realizar un reloj digital con las funcionalidades
start-stop 
La segunda parte contsiste en  realizar una alarma que activara un sonido por defecto.
*/
const d = document;
let clockTime;
export default function digitalClock(clock, start, stop) { //selectores.


    d.addEventListener("click", e => { //evento

        if (e.target.matches(start)) { //toda la zona.

            clockTime = setInterval(() => {
                let hour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h1>${hour}</h1>`;

            }, 1000);

            e.target.disabled = true;
        }
        if (e.target.matches(stop)) {
            clearInterval(clockTime);
            //clearInterval(clockTime);
            d.querySelector(clock).innerHTML = null;

            d.querySelector(start).disabled = false;
        }

    })

}
//
export function alarm(activar, desactivar, audio) {

    let time;
    const $audio = d.createElement("audio");
    $audio.src = audio;
    $audio.loop = true;
    d.addEventListener("click", e => {

        if (e.target.matches(activar)) {
            time = setTimeout(() => { //temporizador.
                $audio.play();
            }, 1000);

            e.target.disabled = true;

        }
        if (e.target.matches(desactivar)) {
            clearTimeout(time);
            $audio.pause();
            $audio.currentTime = 0
            d.querySelector(activar).disabled = false;

        }
    })
}

//