/**
 * this excercisies is on count-down wich get birhday with fate now , fianlly show message happy birthday
 */
const d = document;

export default function countDown(id, limitDate, mensaje) {
    const $count = d.getElementById(id),
        countDownBirthday = new Date(limitDate).getTime(); //get birthday


    let Tempo = setInterval(() => { // set tempo.
        let now = new Date().getTime(),
            limitTime = countDownBirthday - now, //rest dateNow with  birthday

            days = Math.floor(limitTime / (1000 * 60 * 60 * 24)), //converter days-miliseconds in date
            hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2), //converter hours 
            mins = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 60)) / (1000 * 60))).slice(-2),
            seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / (1000))).slice(-2); // //converter  seconds 

        $count.innerHTML = `<h1> Faltan: ${days} dias  ${hours} horas ${mins}  minutos  ${seconds} seconds  </h1>`; //paint  in div countdown

        if (limitTime < 0) {
            clearInterval(Tempo); //clear tempo
            $count.innerHTML = `<h1>${mensaje}</h1>`; //oaint in div;
        }
    });

}