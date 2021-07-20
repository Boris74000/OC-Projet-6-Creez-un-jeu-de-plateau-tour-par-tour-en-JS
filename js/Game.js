class Game {
    constructor() {
        this.currentPlayer = "cloud";
        this.enemyplayer = "sephiroth"
    }

    determineEnemyPlayer() {
        console.log("-----------Début du tour------------")
        console.log(`debut currentPlayer: ${this.currentPlayer}`);

        console.log(`debut enemy: ${this.enemyplayer}`);

        if (this.currentPlayer === "cloud") {
            this.enemyplayer = "sephiroth"
        } else {
            this.enemyplayer = "cloud"
        }
        console.log(`après determineEnemyPlayer enemy: ${this.enemyplayer}`);

    }

    getCurrentPlayerPosition() {
        this.cellsArray = Array.from(mapBoardGame.cells)

        for (let i = 0; i < this.cellsArray.length; i++) {
            if (this.cellsArray[i].id === this.currentPlayer) {
                this.currentPlayerPosition = i;
            }

        }

    }

    generateWayVerticallyUp() {
        let indiceVerticallyUp = 10;

        for (let i = 0; i < 3; i++) {

            if (this.currentPlayerPosition - indiceVerticallyUp >= 0 && this.cellsArray[this.currentPlayerPosition - indiceVerticallyUp].className !== "obstacle" ) {

                this.cellsArray[this.currentPlayerPosition - indiceVerticallyUp].classList.add("wayPossible");

            } else {

                i = 3;
            }

            indiceVerticallyUp += 10;
        }

    }

    generateWayVerticallyDown() {
        let indiceVerticallyDown = 10;

        for (let i = 0; i < 3; i++) {

            if (this.currentPlayerPosition + indiceVerticallyDown <= 99 && this.cellsArray[this.currentPlayerPosition + indiceVerticallyDown].className !== "obstacle" ) {

                this.cellsArray[this.currentPlayerPosition + indiceVerticallyDown].classList.add("wayPossible");

            } else {

                i = 3;
            }

            indiceVerticallyDown += 10;
        }

    }

    generateWayHorizontallyLeft() {
        let indiceHorizontallyLeft = 1;

        for (let i = 0; i < 3; i++) {

            // On récupère la dizaine de l'indice de la position du personnage
            let unitsPositionCharacter = this.currentPlayerPosition % 10;
            let tensPositionCharacter = (this.currentPlayerPosition - unitsPositionCharacter) / 10;

            // On récupère la dizaine de l'indice de la position du personnage - indiceHorizontallyLeft
            let unitsPositionCharacterLessIndex = (this.currentPlayerPosition - indiceHorizontallyLeft) % 10;
            let tensPositionCharacterLessIndex = (this.currentPlayerPosition - indiceHorizontallyLeft - unitsPositionCharacterLessIndex) / 10;

            // Si la soustraction des 2 dizaines est égal à 0 (on est donc sur la même ligne)

            if (this.currentPlayerPosition - indiceHorizontallyLeft >= 0 &&
                this.cellsArray[this.currentPlayerPosition - indiceHorizontallyLeft].className !== "obstacle" &&
                tensPositionCharacter - tensPositionCharacterLessIndex === 0) {

                this.cellsArray[this.currentPlayerPosition - indiceHorizontallyLeft].classList.add("wayPossible");

            } else {

                i = 3;
            }

            indiceHorizontallyLeft += 1;
        }

    }

    generateWayHorizontallyRight() {
        let indiceHorizontallyRight = 1;

        for (let i = 0; i < 3; i++) {

            // On récupère la dizaine de l'indice de la position du personnage
            let unitsPositionCharacter = this.currentPlayerPosition % 10;
            let tensPositionCharacter = (this.currentPlayerPosition - unitsPositionCharacter) / 10;

            // On récupère la dizaine de l'indice de la position du personnage - indiceHorizontallyRight
            let unitsPositionCharacterLessIndex = (this.currentPlayerPosition + indiceHorizontallyRight) % 10;
            let tensPositionCharacterLessIndex = (this.currentPlayerPosition + indiceHorizontallyRight - unitsPositionCharacterLessIndex) / 10;

            // Si la soustraction des 2 dizaines est égal à 0 (on est donc sur la même ligne)

            if (this.currentPlayerPosition + indiceHorizontallyRight <= 99 &&
                this.cellsArray[this.currentPlayerPosition + indiceHorizontallyRight].className !== "obstacle" &&
                tensPositionCharacter - tensPositionCharacterLessIndex === 0) {

                this.cellsArray[this.currentPlayerPosition + indiceHorizontallyRight].classList.add("wayPossible");

            } else {

                i = 3;
            }

            indiceHorizontallyRight += 1;
        }


    }

    moveCharacter = () => {

        this.cellsClassNameWayPossible = document.getElementsByClassName("wayPossible");

        for (let i = 0 ; i < this.cellsClassNameWayPossible.length; i++) {


            this.cellsClassNameWayPossible[i].addEventListener('click', (e) => {

                this.changeInvocation(e);

                console.log(`currentPlayer : ${document.getElementById(this.currentPlayer)}`)
                console.log()
                // document.getElementById(this.currentPlayer).classList.add("wayPossible");
                document.getElementById(this.currentPlayer).removeAttribute("id");

                // e.target.classList.remove("wayPossible");
                e.target.id = this.currentPlayer;

                this.detectEnemy();

            })
        }

    }

    changeInvocation(e) {
        if (this.currentPlayer === "cloud") {
            this.currentPlayerInvocation = cloud.invocation;
        } else {
            this.currentPlayerInvocation = sephiroth.invocation;
        }

        for (let i = 0; i < e.target.classList.length; i++) {

            switch (e.target.classList[i]) {
                case "chocoMog":
                    e.target.classList.replace("chocoMog", this.currentPlayerInvocation);
                    this.currentPlayerInvocation = "chocoMog";
                    break;
                case "shiva":
                    e.target.classList.replace("shiva", this.currentPlayerInvocation);
                    this.currentPlayerInvocation = "shiva";
                    break;
                case "odin":
                    e.target.classList.replace("odin", this.currentPlayerInvocation);
                    this.currentPlayerInvocation = "odin";
                    break;
                case "titan":
                    e.target.classList.replace("titan", this.currentPlayerInvocation);
                    this.currentPlayerInvocation = "titan";
                    break;
                case "knightsOfTheRoundTable":
                    e.target.classList.replace("knightsOfTheRoundTable", this.currentPlayerInvocation);
                    this.currentPlayerInvocation = "knightsOfTheRoundTable";
                    break;
            }

        }

        if (this.currentPlayer === "cloud") {
            cloud.invocation = this.currentPlayerInvocation;
        } else {
            sephiroth.invocation = this.currentPlayerInvocation;
        }

    }

    detectEnemy() {
        this.getCurrentPlayerPosition();

        let indiceAdjacentPositionUpDown = 10
        let indiceAdjacentPositionRightLeft = 1

        // console.log(this.currentPlayerPosition - indiceAdjacentPositionUpDown)

        if (this.currentPlayerPosition - indiceAdjacentPositionUpDown >= 0 &&
            this.cellsArray[this.currentPlayerPosition - indiceAdjacentPositionUpDown].id === this.enemyplayer) {

            this.startFight();

        } else if (this.currentPlayerPosition + indiceAdjacentPositionUpDown <= 99 &&
            this.cellsArray[this.currentPlayerPosition + indiceAdjacentPositionUpDown].id === this.enemyplayer) {

            this.startFight();

        } else if (this.currentPlayerPosition - indiceAdjacentPositionRightLeft >= 0 &&
            this.cellsArray[this.currentPlayerPosition - indiceAdjacentPositionRightLeft].id === this.enemyplayer) {

            this.startFight();

        } else if (this.currentPlayerPosition + indiceAdjacentPositionRightLeft <= 99 &&
            this.cellsArray[this.currentPlayerPosition + indiceAdjacentPositionRightLeft].id === this.enemyplayer) {

            this.startFight();

        } else {

            this.nextRound();
        }

    }

    startFight() {
        alert('combat qui débute');
    }

    nextRound = () => {
        // On efface le chemin proposé du joueur actuel
        for (let i = 0; i < this.cellsArray.length; i++) {
            this.cellsArray[i].classList.remove("wayPossible");
        }

        // On change le joueur actuel
        if (this.currentPlayer === "cloud") {
            console.log("condition current player cloud")
            this.currentPlayer = "sephiroth";
        } else {
            console.log("condition current player sephiroth")
            this.currentPlayer = "cloud";
        }

        console.log(`apres changement joueur fin currentPlayer: ${this.currentPlayer}`);
        console.log(`fin enemy: ${this.enemyplayer}`);
        console.log("---------fin du tour------------")

        // On relance les méthodes
        this.determineEnemyPlayer();
        this.getCurrentPlayerPosition();
        this.generateWayVerticallyUp();
        this.generateWayVerticallyDown();
        this.generateWayHorizontallyLeft();
        this.generateWayHorizontallyRight();
        this.moveCharacter();


    }
}

