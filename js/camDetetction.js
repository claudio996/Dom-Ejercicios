/*Este ejercicio contiste en detectar la camara web.
 */
const d = document,
    n = navigator;


export default function camDetect(video) { //selectores.
    const $video = d.getElementById(video);
    console.log(n.mediaDevices.getUserMedia);
    if (n.mediaDevices.getUserMedia) {
        n.mediaDevices.getUserMedia({
                video: true,
                audio: false // de media device rellenamos el metodo getUserMedia con video y sonido.
            })
            .then((stream) => { //esperamos a que se ejecute nuestro video para ejecutar promessa.
                console.log(stream); //reproduccion.
                $video.srcObject = stream; //pasamos transmision.
                $video.play();

            }).catch((err) => {
                $video.insertAdjacentHTML("beforebegin", `<p><mark>${err}</mark> </p>`)
            });
    }
}