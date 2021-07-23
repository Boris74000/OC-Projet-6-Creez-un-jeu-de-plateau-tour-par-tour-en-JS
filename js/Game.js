class Game {
    constructor() {
        this.currentPlayer = "cloud";
        this.enemyplayer = "sephiroth";
    }

    getCurrentPlayerPosition() {
        for (let i = 0; i < mapBoardGame.cells.length; i++) {
            if (mapBoardGame.cells[i].id === this.currentPlayer) {
                this.currentPlayerPosition = i;
                break;
            }

        }

    }

    generateWayVerticallyUp() {
        let indiceVerticallyUp = 10;

        for (let i = 0; i < 3; i++) {

            if (this.currentPlayerPosition - indiceVerticallyUp >= 0 && mapBoardGame.cells[this.currentPlayerPosition - indiceVerticallyUp].className !== "obstacle" ) {

                mapBoardGame.cells[this.currentPlayerPosition - indiceVerticallyUp].classList.add("wayPossible");

            } else {

                i = 3;
            }

            indiceVerticallyUp += 10;
        }

    }

    generateWayVerticallyDown() {
        let indiceVerticallyDown = 10;

        for (let i = 0; i < 3; i++) {

            if (this.currentPlayerPosition + indiceVerticallyDown <= 99 && mapBoardGame.cells[this.currentPlayerPosition + indiceVerticallyDown].className !== "obstacle" ) {

                mapBoardGame.cells[this.currentPlayerPosition + indiceVerticallyDown].classList.add("wayPossible");

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
                mapBoardGame.cells[this.currentPlayerPosition - indiceHorizontallyLeft].className !== "obstacle" &&
                tensPositionCharacter - tensPositionCharacterLessIndex === 0) {

                mapBoardGame.cells[this.currentPlayerPosition - indiceHorizontallyLeft].classList.add("wayPossible");

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
                mapBoardGame.cells[this.currentPlayerPosition + indiceHorizontallyRight].className !== "obstacle" &&
                tensPositionCharacter - tensPositionCharacterLessIndex === 0) {

                mapBoardGame.cells[this.currentPlayerPosition + indiceHorizontallyRight].classList.add("wayPossible");

            } else {

                i = 3;
            }

            indiceHorizontallyRight += 1;
        }


    }

    events = () => {

        this.wayPossibleCells = Array.from(document.getElementsByClassName("wayPossible"));

        for (let i = 0; i < this.wayPossibleCells.length; i++) {
            this.wayPossibleCells[i].addEventListener("click", (e) => {
                this.changeInvocation(e);
                this.moveCharacter(e);
                // this.detectEnemy();
                this.nextRound();
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

    moveCharacter = (e) => {
        // document.getElementById(this.currentPlayer).classList.add("wayPossible");
        document.getElementById(this.currentPlayer).removeAttribute('id');

        e.target.classList.remove("wayPossible");
        e.target.id = this.currentPlayer;
    }




    nextRound = () => {
        // On efface le chemin proposé du joueur actuel
        for (let i = 0; i < this.wayPossibleCells.length; i++) {
            this.wayPossibleCells[i].classList.remove("wayPossible");
        }
        // // On change le joueur actuel
        // if (this.currentPlayer === "cloud") {
        //     this.currentPlayer = "sephiroth";
        // } else {
        //     this.currentPlayer = "cloud";
        // }


        // On relance les méthodes
        // this.determineEnemyPlayer();
        this.getCurrentPlayerPosition();
        this.generateWayVerticallyUp();
        this.generateWayVerticallyDown();
        this.generateWayHorizontallyLeft();
        this.generateWayHorizontallyRight();
        this.events();
        // this.moveCharacter();

    }
}

