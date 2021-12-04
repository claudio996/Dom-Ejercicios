/*Este ejercicio contiste en detectar la camara web.
 */
const d = document,
    n = navigator;


export default function validation() { //selectores.
    const $form = d.querySelector('.contact-form'),
        $inputReq = d.querySelectorAll(".contact-form [required]")


    $inputReq.forEach(input => { //asignamos los valores devueltos por el foreach.

        const $span = d.createElement("span"); //creamos span atravez del foreach.
        $span.id = input.name;
        $span.textContent = input.title;

        $span.classList.add('.contact-form-error', 'none');

        input.insertAdjacentElement('afterend', $span)
    })

    d.addEventListener('keyup', e => {
        if (e.target.matches(".contact-form [required]")) { //buscamos los elementos que tienen el required.s
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern // recogemos las expresion regular.


            if (pattern && $input.value != '') { //si la expresion regular y el valor del input no son iguales a vacios 
                let regex = new RegExp(pattern)
                console.log(regex);
                return !regex.exec($input.value) ? //si el patron que se esta creando no coincide con el del valor del input
                    d.getElementById($input.name).classList.add('is-ative') : //activa el error 
                    d.getElementById($input.name).classList.remove('is-active') //de lo contrario sacalo.
            }

            if (!pattern) { //si no hay patron.

                return $input.value === '' ? //retorna el input vacio.
                    d.getElementById($input.name).classList.add("is-active") : //activa el error
                    d.getElementById($input.name).classList.remove("is-active") //de lo contrario remuevelo.
            }
        }
    })
    d.addEventListener('submit', e => { //recibimos el submit
        e.preventDefault();
        const $loader = d.querySelector(".contact-form-loader"), //cargamos nuestros selectores
            response = d.querySelector('.contact-form-response');
        $loader.classList.remove('none');
        alert('procesaanso')
        setTimeout(() => { //simulando el consumo de un api o solicitud ajax
            $loader.classList.add("none"); //oultar svg
            console.log($loader);
            response.classList.remove('none'), //remover svg
                $form.reset(); //resetear

            setTimeout(() => {
                response.classList.add("none") //despues de la carga  volver aparecer el svg 
            }, 3000);
        }, 3000);
    })
}