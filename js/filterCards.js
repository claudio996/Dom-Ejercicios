/*Este ejercicio contiste en buscar la card correspondiente.
 */
const d = document,
    w = window;

export default function filterCard(input, card) { //selectores.
    d.addEventListener('keyup', e => {

        if (e.target.matches(input)) {
            d.querySelectorAll(card);


            if (e.key === 'Escape') e.target.value = ''

            d.querySelectorAll(card).forEach(el => el.textContent.toLowerCase().includes(e.target.value) //recorremos las cartas e igualamos lo escrito en nuestro input.
                ?
                el.classList.remove("filter") :
                el.classList.add("filter")
            );
        }
    })
}