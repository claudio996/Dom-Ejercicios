/*Este ejercicio contiste en hacer un panel deplegable  obteniendo los selectores y detectando los elementos
del mismo modo agregaremos y quitaremos clases.
*/

export default function hamburgerMenu(panelBtn, panel, menuLink) { //selectores.
    const d = document;
    d.addEventListener("click", e => { //evento

        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) { //toda la zona.
            d.querySelector(panel).classList.toggle('is-active'); //Quitamos y agregamos clases.
            d.querySelector(panelBtn).classList.toggle('is-active');
        }
        if (e.target.matches(menuLink)) {
            d.querySelector(panel).classList.remove('is-active');
            d.querySelector(panelBtn).classList.remove('is-active');

        }
    })
}