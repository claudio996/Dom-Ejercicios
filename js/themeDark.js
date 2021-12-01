const d = document,
    ls = localStorage;

export default function darkMode(darkThemeBtn, classDark) {

    const $btn = d.querySelector(darkThemeBtn),
        selectors = d.querySelectorAll("[data-dark]");

    let moon = "🌙",
        sun = "🌞";

    //function lightmode

    const Dark = () => {
        selectors.forEach(element => {
            element.classList.add(classDark); //remove-add class
            $btn.textContent = sun; //cambiamos a la otra variable.
            //establecemos in localsorage clave valor.
            ls.setItem('theme', 'dark');
        });

    }

    const light = () => {
        selectors.forEach(element => {
            element.classList.remove(classDark);
            $btn.textContent = moon;
            ls.setItem('theme', 'light');
        });

    }

    d.addEventListener("click", e => {

        if (e.target.matches(darkThemeBtn)) {

            if ($btn.textContent === moon) {
                Dark()
            } else {
                light();
            }


        }

    })
    d.addEventListener('DOMContentLoaded', e => {
        if (ls.getItem('theme') === null) {
            ls.setItem('theme', 'light'); //set new value for theme with content null.
        }
        if (ls.getItem('theme') === 'light') {
            light();
        }
        if (ls.getItem('theme') === 'dark') {
            Dark();
        }
    });

}