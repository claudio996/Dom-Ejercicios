const d = document,
    w = window;

export default function responsiveT(form) {
    const $form = d.getElementById(form);

    let tester;

    d.addEventListener("submit", e => {
        if (e.target === $form) {
            e.preventDefault();
            alert("form enciadso");
            tester = w.open($form.url.value, "tester", `innerWidth=${$form.width.value},innerHeight = ${$form.height.value}`);
        }
    })

    d.addEventListener("click", e => {
        if (e.target === $form.cerrar) {
            tester.close();
        }
    })
}