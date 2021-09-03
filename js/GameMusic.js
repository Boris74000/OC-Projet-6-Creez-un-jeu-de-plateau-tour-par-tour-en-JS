'use strict'

class GameMusic {
    constructor() {
        this.playMusic();
        this.stopMusic();
        // this.audioPrelude = new Audio('audio/ff7_prelude.mp3');
    }

    playAudioFighting() {
        this.audioFighting = new Audio('audio/enter_battle.mp3');
        this.audioFighting.play();
    }

    playMusic() {
        document.getElementById("musicOn").addEventListener("click", function () {
            document.getElementById("audioFile").play();
            document.getElementById("audioFile").volume = 0.2;
            document.getElementById("musicOn").style.display = "none";
            document.getElementById("musicOff").style.display = "block";
        })
    }

    stopMusic() {
        document.getElementById("musicOff").addEventListener("click", function () {
            document.getElementById("audioFile").pause();
            document.getElementById("musicOff").style.display = "none";
            document.getElementById("musicOn").style.display = "block";
        })
    }
}