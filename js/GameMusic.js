'use strict'

class GameMusic {
    constructor() {
        // this.playMusicPrelude();
        // this.stopMusicPrelude();
        // this.playAudioFighting();
        // this.stopAudioFighting();
        this.events();
        // this.audioFighting = new Audio('audio/fighting.mp3');
        // this.audioPrelude = new Audio('audio/ff7_prelude.mp3');
    }

    playAudioEnterBattle() {
        this.audioFighting = new Audio('audio/enter_battle.mp3');
        this.audioFighting.play();
        this.audioFighting.volume = 0.2;
    }

    playAudioFighting() {
        document.getElementById("audioFileFighting").play();
        document.getElementById("audioFileFighting").volume = 0.2;
        document.getElementById("musicFightingOn").style.display = "none";
        document.getElementById("musicFightingOff").style.display = "flex";
        // this.audioFighting.play();
        // this.audioFighting.volume = 0.2;
    }

    stopAudioFighting() {
        // this.audioFighting.pause();
        document.getElementById("audioFileFighting").pause();
        document.getElementById("musicFightingOn").style.display = "flex";
        document.getElementById("musicFightingOff").style.display = "none";
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

    playMusicPrelude() {
        document.getElementById("audioFilePrelude").play();
        document.getElementById("audioFilePrelude").volume = 0.2;
        document.getElementById("musicPreludeOn").style.display = "none";
        document.getElementById("musicPreludeOff").style.display = "flex";
    }

    stopMusicPrelude() {
        document.getElementById("audioFilePrelude").pause();
        document.getElementById("musicPreludeOff").style.display = "none";
        document.getElementById("musicPreludeOn").style.display = "flex";
    }

    hideBtnMusicPrelude() {
        document.getElementById("musicPreludeOff").style.display = "none";
        document.getElementById("musicPreludeOn").style.display = "none";
    }

    displayBtnMusicFighting() {
        document.getElementById("musicFightingOff").style.display = "flex";
        document.getElementById("musicPreludeOn").style.display = "none";
    }

    events() {
        document.getElementById("musicPreludeOff").addEventListener("click", this.stopMusicPrelude);
        document.getElementById("musicPreludeOn").addEventListener("click", this.playMusicPrelude);
        document.getElementById("musicFightingOff").addEventListener("click", this.stopAudioFighting);
        document.getElementById("musicFightingOn").addEventListener("click", this.playAudioFighting);
    }

}