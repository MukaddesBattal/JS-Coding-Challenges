const play = document.getElementById("play");
const pause = document.getElementById("pause");
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const miliseconds = document.getElementById("miliseconds");
const stop = document.getElementById("stop");

play.addEventListener("click", (e) => {
    setInt()
});

let count = 1
pause.addEventListener("click", () => {
    clearInterval(settime)
});

stop.addEventListener("click", () => {
    window.location.reload()
});

let settime;
function setInt() {
    let min = 1
    let mil = 1
    let count = 0
    settime = setInterval(() => {
        miliseconds.innerText = count
        count++
        if (count == 100) {

            (seconds.innerText)++
            miliseconds.innerText = 0
            count = 0
        }
        if (seconds.innerText == 59) {
            if (minutes.innerText < 9) {
                minutes.innerText = "0" + min
                min++
            }
            else {
                (minutes.innerText)++
            }
            seconds.innerText = 00
        }
        if (minutes.innerText == 59) {
            hour.innerText++;
            minutes.innerText = 00;
        }
    }, 10)
}

function cleInt() {

    clearInterval(setInt())

}