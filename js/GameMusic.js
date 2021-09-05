'use strict'

class GameMusic {
    constructor() {
        this.playMusic();
        this.stopMusic();
        // this.audioPrelude = new Audio('audio/ff7_prelude.mp3');
    }

    playAudioEnterBattle() {
        this.audioFighting = new Audio('audio/enter_battle.mp3');
        this.audioFighting.play();
        this.audioFighting.volume = 0.2;
    }

    playAudioFighting() {
        this.audioFighting = new Audio('audio/fighting.mp3');
        this.audioFighting.play();
        this.audioFighting.volume = 0.2;
    }

    stopAudioFighting() {
        this.audioFighting.pause();
    }

    playAudioVictory() {
        this.audioFighting = new Audio('audio/victory.mp3');
        this.audioFighting.play();
        this.audioFighting.volume = 0.2;
    }

    playCursorSound() {
        $("#audioFileCursor").trigger("play");
        // $("#audioFileCursor").prop("volume, 0.02");
        document.getElementById("audioFileCursor").volume = 0.2;
    }

    playMusic() {
        document.getElementById("musicOn").addEventListener("click", function () {
            document.getElementById("audioFilePrelude").play();
            document.getElementById("audioFilePrelude").volume = 0.2;
            document.getElementById("musicOn").style.display = "none";
            document.getElementById("musicOff").style.display = "block";
        })
    }

    stopMusic() {
        document.getElementById("musicOff").addEventListener("click", function () {
            document.getElementById("audioFilePrelude").pause();
            document.getElementById("musicOff").style.display = "none";
            document.getElementById("musicOn").style.display = "block";
        })
    }
}