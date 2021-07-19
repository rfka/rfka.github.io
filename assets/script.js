const class_video = document.querySelectorAll(".video");

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 30){
            document.querySelector("#timer").classList.add("terminando");
        }
        if (timer < 0) {
            document.getElementById("resposta").innerHTML = "<h3>Tempo Esgotado!!!</h3>";
            timer = 0;
            document.querySelector("#timer").classList.remove("terminando");
            document.querySelector("#timer").classList.add("fim");
            document.querySelector(".youtube").setAttribute("src", " ");
        }
    }, 1000);
}
function iniciar_cronometro() {
    var duration = document.getElementById("duracao_id").value;
    duration = duration * 60; // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
    var video = document.querySelector("#video").value;
    var link_video = video.replace("watch?v=", "embed/");
    document.querySelector(".youtube").setAttribute("src", link_video);
    startTimer(duration, display); // iniciando o timer
    document.querySelector("#tempo").classList.add("ocultar");
    document.querySelector(".video").classList.add("ocultar");
};