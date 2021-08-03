class Game {
    constructor() {
        this.currentPlayer = "cloud";
        this.enemyplayer = "sephiroth";
    }

    getCurrentPlayerPosition() {
        this.cellsTd = document.getElementsByTagName('td');
        for (let i = 0; i < this.cellsTd.length; i++) {
            if (this.cellsTd[i].id === this.currentPlayer) {
                this.currentPlayerPosition = i;
                break;
            }
        }
    }

    generateWayVerticallyUp() {
        let indiceVerticallyUp = 10;

        for (let i = 0; i < 3; i++) {

            if (this.currentPlayerPosition - indiceVerticallyUp >= 0 &&
                this.cellsTd[this.currentPlayerPosition - indiceVerticallyUp].className !== "obstacle" &&
                this.cellsTd[this.currentPlayerPosition - indiceVerticallyUp].id !== this.enemyplayer) {

                this.cellsTd[this.currentPlayerPosition - indiceVerticallyUp].classList.add("wayPossible");

            } else {

                i = 3;
            }

            indiceVerticallyUp += 10;
        }

    }

    generateWayVerticallyDown() {
        let indiceVerticallyDown = 10;

        for (let i = 0; i < 3; i++) {

            if (this.currentPlayerPosition + indiceVerticallyDown <= 99 &&
                this.cellsTd[this.currentPlayerPosition + indiceVerticallyDown].className !== "obstacle" &&
                this.cellsTd[this.currentPlayerPosition + indiceVerticallyDown].id !== this.enemyplayer) {

                this.cellsTd[this.currentPlayerPosition + indiceVerticallyDown].classList.add("wayPossible");

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
                this.cellsTd[this.currentPlayerPosition - indiceHorizontallyLeft].className !== "obstacle" &&
                this.cellsTd[this.currentPlayerPosition - indiceHorizontallyLeft].id !== this.enemyplayer &&
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

        for (let i = 0; i < 3; i++) {

            // On récupère la dizaine de l'indice de la position du personnage
            let unitsPositionCharacter = this.currentPlayerPosition % 10;
            let tensPositionCharacter = (this.currentPlayerPosition - unitsPositionCharacter) / 10;

            // On récupère la dizaine de l'indice de la position du personnage - indiceHorizontallyRight
            let unitsPositionCharacterLessIndex = (this.currentPlayerPosition + indiceHorizontallyRight) % 10;
            let tensPositionCharacterLessIndex = (this.currentPlayerPosition + indiceHorizontallyRight - unitsPositionCharacterLessIndex) / 10;

            // Si la soustraction des 2 dizaines est égal à 0 (on est donc sur la même ligne)

            if (this.currentPlayerPosition + indiceHorizontallyRight <= 99 &&
                this.cellsTd[this.currentPlayerPosition + indiceHorizontallyRight].className !== "obstacle" &&
                this.cellsTd[this.currentPlayerPosition + indiceHorizontallyRight].id !== this.enemyplayer &&
                tensPositionCharacter - tensPositionCharacterLessIndex === 0) {

                this.cellsTd[this.currentPlayerPosition + indiceHorizontallyRight].classList.add("wayPossible");

            } else {

                i = 3;
            }

            indiceHorizontallyRight += 1;
        }


    }

    checkElClicked() {
       document.addEventListener("click", (e) => {
           if (e.target.classList.contains("wayPossible")) {
               this.moveCharacter(e);
               e.stopImmediatePropagation();
           }
       })

    }

    moveCharacter = (e) => {
        // alert("moveCharacter");
        document.getElementById(this.currentPlayer).removeAttribute('id');

        e.target.id = this.currentPlayer;

        if (e.target.classList.contains("chocoMog") ||
            e.target.classList.contains("shiva") ||
            e.target.classList.contains("titan") ||
            e.target.classList.contains("odin") ||
            e.target.classList.contains("knightsOfTheRoundTable")) {
            this.changeInvocation(e);
        }

        this.detectEnemy();

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

        if (this.currentPlayerPosition - indiceAdjacentPositionUpDown >= 0 &&
            this.cellsTd[this.currentPlayerPosition - indiceAdjacentPositionUpDown].id === this.enemyplayer) {

            this.startFight();

        } else if (this.currentPlayerPosition + indiceAdjacentPositionUpDown <= 99 &&
            this.cellsTd[this.currentPlayerPosition + indiceAdjacentPositionUpDown].id === this.enemyplayer) {

            this.startFight();

        } else if (this.currentPlayerPosition - indiceAdjacentPositionRightLeft >= 0 &&
            this.cellsTd[this.currentPlayerPosition - indiceAdjacentPositionRightLeft].id === this.enemyplayer) {

            this.startFight();

        } else if (this.currentPlayerPosition + indiceAdjacentPositionRightLeft <= 99 &&
            this.cellsTd[this.currentPlayerPosition + indiceAdjacentPositionRightLeft].id === this.enemyplayer) {

            this.startFight();

        } else {

            this.nextRound();
        }

    }

    startFight() {
        alert('combat qui débute');
    }

    changeCurrentAndEnemyPlayer() {
        if (this.currentPlayer === "cloud") {
            this.currentPlayer = "sephiroth";
            this.enemyplayer = "cloud";
        } else {
            this.currentPlayer = "cloud";
            this.enemyplayer = "sephiroth";
        }
    }

    nextRound = () => {
        // On efface le chemin proposé du joueur actuel
        this.wayPossibleCells = Array.from(document.getElementsByClassName("wayPossible"));
        for (let i = 0; i < this.wayPossibleCells.length; i++) {
            this.wayPossibleCells[i].classList.remove("wayPossible");
        }
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

