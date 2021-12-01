/*Este ejercicio contiste en detectar el estado de la  red.
 */
const d = document,
    w = window,
    n = navigator;


export default function networkDetect() { //selectores.

    const isOnline = () => {

        console.log('hola');
        const $div = d.createElement("div");;
        if (n.onLine) {
            $div.textContent = "Conexion establecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        } else {
            $div.textContent = "Conexion perdida";
            $div.classList.add("offline");
            $div.classList.remove("online")

        }
        d.body.insertAdjacentElement("afterbegin", $div);

        setTimeout(() => d.body.removeChild($div), 2000);
    };

    w.addEventListener("online", (e) => isOnline());
    w.addEventListener("offline", (e) => isOnline());

}