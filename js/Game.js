"use strict";

class Game {
    constructor() {
        this.currentPlayer = cloud;
        this.enemyplayer = sephiroth;
    }

    createDivCharacters() {
        window.onload = function () {
            if (window.screen.width < 768 ) {
                const parent = document.getElementsByClassName("charactersAndMap");
                const containerCharacteristicsCharacters = document.createElement("div");
                const cloudCharacteristics = document.getElementById("cloudCharacteristics");
                const sephirothCharacteristics = document.getElementById("sephirothCharacteristics");

                containerCharacteristicsCharacters.classList.add("characters");
                parent[0].appendChild(containerCharacteristicsCharacters);
                containerCharacteristicsCharacters.appendChild(cloudCharacteristics);
                containerCharacteristicsCharacters.appendChild(sephirothCharacteristics);
            }
        }
    }

    hideStartGameScreen() {
        $("#startGameBtn").on("click", function () {
            $("#startGameScreen").fadeOut("3000");
        })
    }

    getCurrentPlayerPosition() {
        this.cellsTd = document.getElementsByTagName('td');
        for (let i = 0; i < this.cellsTd.length; i++) {
            if (this.cellsTd[i].id === this.currentPlayer.nameCharacter) {
                this.currentPlayerPosition = i;
                break;
            }
        }
    }

    generateWayVerticallyUp() {
        // alert("ici");
        // console.log(this.keyPressCount);
        //
        let indiceVerticallyUp = 10;
        //
        this.indiceWayPossible = 0;

        if (this.keyPressCount > 0 && this.keyPressCount < 3) {
            this.indiceWayPossible = this.keyPressCount
        } else {
            this.indiceWayPossible = 0;
        }
        // console.log(this.indiceWayPossible);

        for (let i = this.indiceWayPossible; i < 3; i++) {

            if (this.currentPlayerPosition - indiceVerticallyUp >= 0 &&
                this.cellsTd[this.currentPlayerPosition - indiceVerticallyUp].className !== "obstacle" &&
                this.cellsTd[this.currentPlayerPosition - indiceVerticallyUp].id !== this.enemyplayer.nameCharacter) {

                this.cellsTd[this.currentPlayerPosition - indiceVerticallyUp].classList.add("wayPossible");

            } else {

                i = 3;
            }

            indiceVerticallyUp += 10;
        }
    }

    generateWayVerticallyDown() {
        let indiceVerticallyDown = 10;

        for (let i = this.indiceWayPossible; i < 3; i++) {

            if (this.currentPlayerPosition + indiceVerticallyDown <= 99 &&
                this.cellsTd[this.currentPlayerPosition + indiceVerticallyDown].className !== "obstacle" &&
                this.cellsTd[this.currentPlayerPosition + indiceVerticallyDown].id !== this.enemyplayer.nameCharacter) {

                this.cellsTd[this.currentPlayerPosition + indiceVerticallyDown].classList.add("wayPossible");

            } else {

                i = 3;
            }

            indiceVerticallyDown += 10;
        }
    }

    generateWayHorizontallyLeft() {
        let indiceHorizontallyLeft = 1;

        for (let i = this.indiceWayPossible; i < 3; i++) {

            // On récupère la dizaine de l'indice de la position du personnage
            let unitsPositionCharacter = this.currentPlayerPosition % 10;
            let tensPositionCharacter = (this.currentPlayerPosition - unitsPositionCharacter) / 10;

            // On récupère la dizaine de l'indice de la position du personnage - indiceHorizontallyLeft
            let unitsPositionCharacterLessIndex = (this.currentPlayerPosition - indiceHorizontallyLeft) % 10;
            let tensPositionCharacterLessIndex = (this.currentPlayerPosition - indiceHorizontallyLeft - unitsPositionCharacterLessIndex) / 10;

            // Si la soustraction des 2 dizaines est égal à 0 (on est donc sur la même ligne)

            if (this.currentPlayerPosition - indiceHorizontallyLeft >= 0 &&
                this.cellsTd[this.currentPlayerPosition - indiceHorizontallyLeft].className !== "obstacle" &&
                this.cellsTd[this.currentPlayerPosition - indiceHorizontallyLeft].id !== this.enemyplayer.nameCharacter &&
                tensPositionCharacter - tensPositionCharacterLessIndex === 0) {

                this.cellsTd[this.currentPlayerPosition - indiceHorizontallyLeft].classList.add("wayPossible");

            } else {

                i = 3;
            }

            indiceHorizontallyLeft += 1;
        }
    }

    generateWayHorizontallyRight() {
        let indiceHorizontallyRight = 1;

        for (let i = this.indiceWayPossible; i < 3; i++) {

            // On récupère la dizaine de l'indice de la position du personnage
            let unitsPositionCharacter = this.currentPlayerPosition % 10;
            let tensPositionCharacter = (this.currentPlayerPosition - unitsPositionCharacter) / 10;

            // On récupère la dizaine de l'indice de la position du personnage - indiceHorizontallyRight
            let unitsPositionCharacterLessIndex = (this.currentPlayerPosition + indiceHorizontallyRight) % 10;
            let tensPositionCharacterLessIndex = (this.currentPlayerPosition + indiceHorizontallyRight - unitsPositionCharacterLessIndex) / 10;

            // Si la soustraction des 2 dizaines est égal à 0 (on est donc sur la même ligne)

            if (this.currentPlayerPosition + indiceHorizontallyRight <= 99 &&
                this.cellsTd[this.currentPlayerPosition + indiceHorizontallyRight].className !== "obstacle" &&
                this.cellsTd[this.currentPlayerPosition + indiceHorizontallyRight].id !== this.enemyplayer.nameCharacter &&
                tensPositionCharacter - tensPositionCharacterLessIndex === 0) {

                this.cellsTd[this.currentPlayerPosition + indiceHorizontallyRight].classList.add("wayPossible");

            } else {

                i = 3;
            }

            indiceHorizontallyRight += 1;
        }
    }


    checkElClicked() {
       this.keyPressCount = 0;

       document.addEventListener("keyup", (e) => {
           const keyboardPressed = e.key;

           if (keyboardPressed === 'ArrowDown') {
               // alert("ok");
               // console.log(e);
               this.cellMovement = this.cellsTd[this.currentPlayerPosition + 10];
               if (this.cellMovement.classList.contains("wayPossible")) {
                   // alert('wayPossible');
                   this.keyPressCount++;
                   this.moveCharacter(e);
                   e.stopImmediatePropagation();
               }

           }

           if (keyboardPressed === 'ArrowUp') {
               // alert("ok");
               // console.log(e);
               this.cellMovement = this.cellsTd[this.currentPlayerPosition - 10];
               if (this.cellMovement.classList.contains("wayPossible")) {
                   // alert('wayPossible');
                   this.keyPressCount++;
                   this.moveCharacter(e);
                   e.stopImmediatePropagation();
               }

           }

           if (keyboardPressed === 'ArrowLeft') {
               // alert("ok");
               // console.log(e);
               this.cellMovement = this.cellsTd[this.currentPlayerPosition - 1];
               if (this.cellMovement.classList.contains("wayPossible")) {
                   // alert('wayPossible');
                   this.keyPressCount++;
                   this.moveCharacter(e);
                   e.stopImmediatePropagation();
               }

           }

           if (keyboardPressed === 'ArrowRight') {
               // alert("ok");
               // console.log(e);
               this.cellMovement = this.cellsTd[this.currentPlayerPosition + 1];
               if (this.cellMovement.classList.contains("wayPossible")) {
                   this.keyPressCount++;
                   this.moveCharacter(e);
                   e.stopImmediatePropagation();
               }

           }

           if (keyboardPressed === 'Enter') {

               this.nextRound();
               e.stopImmediatePropagation();
           }

           // console.log(this.keyPressCount);

       })
    }

    moveCharacter = (e) => {

        document.getElementById(this.currentPlayer.nameCharacter).classList.add("wayPossible");
        document.getElementById(this.currentPlayer.nameCharacter).removeAttribute('id');

        this.cellMovement.id = this.currentPlayer.nameCharacter;

        if (this.cellMovement.classList.contains("chocoMog") ||
            this.cellMovement.classList.contains("shiva") ||
            this.cellMovement.classList.contains("titan") ||
            this.cellMovement.classList.contains("odin") ||
            this.cellMovement.classList.contains("knightsOfRound")) {

            this.changeInvocation(e);
        }

        this.detectEnemy();
    }

    changeInvocation() {
        if (this.currentPlayer === cloud) {

            this.currentPlayerInvocation = cloud.invocation;

        } else {

            this.currentPlayerInvocation = sephiroth.invocation;
        }

        if (this.cellMovement.classList.contains("chocoMog")) {

            this.cellMovement.classList.replace("chocoMog", this.currentPlayerInvocation.classNameInvocation);
            this.currentPlayerInvocation = chocoMog;

        } else if (this.cellMovement.classList.contains("shiva")) {

            this.cellMovement.classList.replace("shiva", this.currentPlayerInvocation.classNameInvocation);
            this.currentPlayerInvocation = shiva;

        } else if (this.cellMovement.classList.contains("odin")) {

            this.cellMovement.classList.replace("odin", this.currentPlayerInvocation.classNameInvocation);
            this.currentPlayerInvocation = odin;

        } else if (this.cellMovement.classList.contains("titan")) {

            this.cellMovement.classList.replace("titan", this.currentPlayerInvocation.classNameInvocation);
            this.currentPlayerInvocation = titan;

        } else if (this.cellMovement.classList.contains("knightsOfRound")) {

            this.cellMovement.classList.replace("knightsOfRound", this.currentPlayerInvocation.classNameInvocation);
            this.currentPlayerInvocation = knightsOfTheRoundTable;
        }



        if (this.currentPlayer === cloud) {
            cloud.invocation = this.currentPlayerInvocation;
            document.getElementById("cloudInvocationPossessed").innerHTML = cloud.invocation.nameInvocation;

        } else {
            sephiroth.invocation = this.currentPlayerInvocation;
            document.getElementById("sephirothInvocationPossessed").innerHTML = sephiroth.invocation.nameInvocation;
        }

        // console.log(this.currentPlayerInvocation);
    }

    detectEnemy() {
        this.getCurrentPlayerPosition();
        // console.log(this.keyPressCount)

        let indiceAdjacentPositionUpDown = 10
        let indiceAdjacentPositionRightLeft = 1

        if (this.currentPlayerPosition - indiceAdjacentPositionUpDown >= 0 &&
            this.cellsTd[this.currentPlayerPosition - indiceAdjacentPositionUpDown].id === this.enemyplayer.nameCharacter) {

            this.startFight();

        } else if (this.currentPlayerPosition + indiceAdjacentPositionUpDown <= 99 &&
            this.cellsTd[this.currentPlayerPosition + indiceAdjacentPositionUpDown].id === this.enemyplayer.nameCharacter) {

            this.startFight();

        } else if (this.currentPlayerPosition - indiceAdjacentPositionRightLeft >= 0 &&
            this.cellsTd[this.currentPlayerPosition - indiceAdjacentPositionRightLeft].id === this.enemyplayer.nameCharacter) {

            this.startFight();

        } else if (this.currentPlayerPosition + indiceAdjacentPositionRightLeft <= 99 &&
            this.cellsTd[this.currentPlayerPosition + indiceAdjacentPositionRightLeft].id === this.enemyplayer.nameCharacter) {

            this.startFight();

        } else if (this.keyPressCount < 3) {

            this.nextMove();

        } else {

            this.nextRound();
        }
    }

    startFight() {
        // audio.playAudioFighting();
        this.displayQuestion();
        this.eventAttackBtn();
        this.eventDefendBtn();
    }

    displayQuestion() {
        $("table").fadeOut("3000");
        document.getElementById("defendOrAttackQuestion").innerHTML = `<span class="nameCharacterInsideQuestion">${this.currentPlayer.nameCharacter}</span>, would you like to attack your enemy or defend yourself ?`;
        document.getElementById("defendOrAttack").style.display = "flex";
    }

    eventAttackBtn() {
        document.getElementById("attack").addEventListener("click", (e) => {
            if (this.enemyplayer.defenseMode === true) {

                this.enemyplayer.health = this.enemyplayer.health - this.currentPlayer.invocation.damage / 2;

            } else {

                this.enemyplayer.health = this.enemyplayer.health - this.currentPlayer.invocation.damage;
            }

            document.getElementById(`${this.enemyplayer.nameCharacter}HealthPoints`).innerHTML = this.enemyplayer.health;

            this.currentPlayer.defenseMode = false;

            e.stopImmediatePropagation();

            // document.getElementById("attack").removeEventListener("click", (e) => {});
            // document.getElementById("defend").removeEventListener("click", (e) => {});

            this.endGame();
        })
    }

    eventDefendBtn() {
        document.getElementById("defend").addEventListener("click", (e) => {

            this.currentPlayer.defenseMode = true;

            e.stopImmediatePropagation();

            // document.getElementById("attack").removeEventListener("click", (e) => {});
            // document.getElementById("defend").removeEventListener("click", (e) => {});

            this.endGame();
        })
    }

    endGame() {
        if (cloud.health <= 0 || sephiroth.health <= 0) {

            alert(`${this.enemyplayer.nameCharacter} est mort, ${this.currentPlayer.nameCharacter} remporte la victoire`);

            document.location.reload();

        } else {

            this.changeCurrentAndEnemyPlayer();

            this.startFight();
        }
    }

    changeCurrentAndEnemyPlayer() {
        if (this.currentPlayer === cloud) {

            this.currentPlayer = sephiroth;
            this.enemyplayer = cloud;

        } else {

            this.currentPlayer = cloud;
            this.enemyplayer = sephiroth;
        }
    }

    deleteWayPossible() {
        // On efface le chemin proposé du joueur actuel
        this.wayPossibleCells = Array.from(document.getElementsByClassName("wayPossible"));
        for (let i = 0; i < this.wayPossibleCells.length; i++) {
            this.wayPossibleCells[i].classList.remove("wayPossible");
        }
    }

    nextMove() {
        this.deleteWayPossible();
        this.getCurrentPlayerPosition();
        this.generateWayVerticallyUp();
        this.generateWayVerticallyDown();
        this.generateWayHorizontallyLeft();
        this.generateWayHorizontallyRight();
    }

    nextRound = () => {
        this.keyPressCount = 0;
        this.deleteWayPossible();
        this.changeCurrentAndEnemyPlayer();

        // On relance les méthodes
        this.getCurrentPlayerPosition();
        this.generateWayVerticallyUp();
        this.generateWayVerticallyDown();
        this.generateWayHorizontallyLeft();
        this.generateWayHorizontallyRight();
        this.checkElClicked();
    }
}

