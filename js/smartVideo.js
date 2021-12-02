/*Este ejercicio contiste en detectar la camara web.
 */
const d = document,
    w = window;


export default function smathVideo(video) { //selectores.
    const $video = d.querySelectorAll('video[data-smart-video]');
    console.log($video);

    const cb = (entries) => {
        console.log(entries);
        entries.forEach(element => {
            if (element.isIntersecting) { //si el elment es interseccionado
                element.target.play();
            } else {
                element.target.pause();
            }

            w.addEventListener('visibilitychange', e => {
                d.visibilityState === 'visible' ?
                    element.play() :
                    element.stop()
            })
        });
    }

    const observer = new IntersectionObserver(cb, { threshold: 0.5 }); //el observer recibe una funcion  
    console.log(observer);
    $video.forEach(element => observer.observe(element) //recorremos las etiquetas videos  y traspasamos el observador. 

        ) //recorremos  los target y asignamos

    /*Observer
    Patrón Observer en JavaScript. ...
     El patrón Observer, es un patrón de diseño de software 
     que nos permite definir una dependencia de uno a muchos 
     entre elementos del sistema, 
     los cuales serán notificados por parte del observable 
     cada vez que se realice una modificación.
    */



}