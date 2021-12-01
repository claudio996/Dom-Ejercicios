/*Este ejercicio contiste en detectar la camara web.
 */
const d = document,
    g = navigator.geolocation;

export default function Geo(divGeo) { //selectores.
    const $divGeo = d.getElementById(divGeo),

        options = { //opciones 
            enableHightAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }

    const success = (position) => { //recepcionamos posicion.
        let coords = position.coords;
        console.log(coords);
        //rellenamos la lista con el metodo position.
        $divGeo.innerHTML = `<ul><li><p><mark>Latitud${coords.latitude}</mark></p></li> 
        <li><p><mark>Longitud:${coords.longitude}</mark></p></li>
        <li><p><mark>Precision:${coords.accuracy}</mark></p></li>
        <li><a href ="https://www.google.cl/maps/@-33.4513,-70.6653,17z" ,${coords.latitude}, ${coords.longitude}, '10z target ="_blank rel= "noopener '<p>Ubicacion</p></a></li>
            </ul>`
    }

    const error = (err) => {
        console.log('algo ha salido mal', err);
    }
    g.getCurrentPosition(success, error, options); //getcurrentoPosition recibe la posicion, el error las opciones.
    console.log(options, g);
}