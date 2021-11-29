const d = document,
    w = window;

export default function responsive(id, mediaQuery, movilContent, desktopContent) {

    let breakP = w.matchMedia(mediaQuery); //watchMedia.
    console.log(breakP);

    const responsive = (e) => { //funcion respob¿nsiva.

        if (e.matches) { //si encontramos el valor true
            d.getElementById(id).innerHTML = desktopContent;
        } else {
            d.getElementById(id).innerHTML = movilContent;
        }


    }

    breakP.addListener(responsive)
    responsive(breakP); //detectamos los cortes de la mediaquery

}