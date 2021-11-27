/*Este ejercicio contiste en dar movimiento al ovalo con el evento key y sus respectivos assci asi como tambien
limitar el contenerdor.
*/
const d = document;
let x = 0,
    y = 0;

export default function MoveBall(e, stage, ball) { //selectores.

    d.addEventListener("keydown", e => { //evento
        e.preventDefault();

        const $ball = d.querySelector(ball),
            $stage = d.querySelector(stage),

            limitsBall = $ball.getBoundingClientRect(),
            limitsStage = $stage.getBoundingClientRect();


        if (e.keyCode === 37) {
            if (limitsBall.left > limitsStage.left) {
                x--;
            }
        }

        if (e.keyCode === 39) {
            if (limitsBall.right < limitsStage.right) {

                x++;
            }
        }
        if (e.keyCode === 38) {
            if (limitsBall.top > limitsStage.top) {
                y--;
            }
        }

        if (e.keyCode === 40) {
            if (limitsBall.bottom < limitsStage.bottom) {
                y++;
            }
        }

        $ball.style.transform = `translate(${x * 5}px , ${y * 5}px)`; //move ball
        console.log(limitsBall);
        console.log(limitsStage);
    })
}