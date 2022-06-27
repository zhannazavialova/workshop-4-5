//переменные для аудиодорожек
audioPlayer = document.querySelector("audio");

audoiPlayerScnd = document.querySelector("audio");

//обращаемся к кнопке старт по селектору
startButton = document.querySelector("#start button");
//обращаемся к стартовому блоку по селектору
startBlock = document.querySelector("#start");
//обращаемся к игровому блоку по селектору
gameBlock = document.querySelector("#game");

//При нажатии на кнопку старт, нужно прятать блок start, и показывать блок game
startButton.onclick = function () {
    startBlock.style.display = "none";
    gameBlock.style.display = "block";
    //создаем переменную для пули
bullet = document.querySelector("#game > div.bullet");
    //запуск пули
    moveBullet(bullet);
}

//Сделай включение мелодии при клике на блок #sound

//переменная для идентификации переключателя звука
sound = "off"; // "on"
//обращаемся к кнопке звука по селектору
soundButton = document.querySelector("#sound img");
//делаем клик по кнопке старт
soundButton.onclick = function () {
    if (sound == "on") {
        soundButton.src = "images/mute_sound.png";
        sound = "off";
        audioPlayer.pause();
    } else {
        //Если мелодия играет то меняем картинку, на ту что показывает звук sound_on.
        soundButton.src = "images/sound_on.png";
        sound = "on";
        audioPlayer.play();
    }
    
}
//Работа с координатами, сделай передвижение игрока вверх и вниз

//обращаемся к игроку по селектору
gamer = document.querySelector("#player");

//делаем функцию для передвижения игрока по вертикали
document.onkeydown = function (event) {
    //если нажимаем на кнопку с S - игрок двигается вниз
    if (event.keyCode == 87) {
        //обозначаем верхнюю границу
        if (gamer.offsetTop > 60) {
          gamer.style.top = gamer.offsetTop - 10 + "px";   
}       
    }
    //если нажимаем на кнопку W - игрок двигается вверх
    if (event.keyCode == 83) {
        //обозначаем нижнюю границу
        if (gamer.offsetTop < document.querySelector("#app").clientHeight - 250) {
          gamer.style.top = gamer.offsetTop + 10 + "px";  
        }
        
    }
}
//функция для траектории полета пули
function moveBullet(fly) {
    setInterval(function () {
        fly.style.left = fly.offsetLeft + 10 + "px";
        if (fly.offsetLeft > 1500) {
            fly.style.left = document.querySelector("body").clientWidth - 1500 + "px"
        }
    }, 10);
}