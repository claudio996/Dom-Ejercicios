/*Este ejercicio contiste en detectar la camara web.
 */
const d = document,
    n = navigator;


export default function validation() { //selectores.
    const $form = d.querySelector('.contact-form'),
        $inputReq = d.querySelectorAll(".contact-form [required]")
    console.log($form, $inputReq);

    $inputReq.forEach(input => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add('.contact-form-error', 'none');
        input.insertAdjacentElement('afterend', $span)
    })

    d.addEventListener('keyup', e => {
        if (e.target.matches(".contact-form [required]")) {
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern
            console.log($input, pattern);

            if (pattern && $input.value != '') {
                let regex = new RegExp(pattern)
                return !regex.exec($input.value) ?
                    d.getElementById($input.name).classList.add('is-ative') :
                    d.getElementById($input.name).classList.remove('is-active')
            }

            if (!pattern) {
                return $input.value === '' ?
                    d.getElementById($input.name).classList.add("is-active") :
                    d.getElementById($input.name).classList.remove("is-active")
            }
        }
    })
    d.addEventListener('submit', e => {
        e.preventDefault();
        const $loader = d.querySelector(".contact-form-loader"),
            response = d.querySelector('.contact-form-response');
        $loader.classList.remove('none');
        alert('procesaanso')
        setTimeout(() => {
            $loader.classList.add("none");
            response.classList.remove('none'),
                $form.reset();

            setTimeout(() => {
                response.classList.add("none")
            }, 3000);
        }, 3000);
    })
}