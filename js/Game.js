class Game {
    constructor() {
        this.currentPlayer = "cloud";
    }

    getCurrentPlayerPosition() {
        this.cellsArray = Array.from(mapBoardGame.cells)

        for (let i = 0; i < this.cellsArray.length; i++) {
            if (this.cellsArray[i].id === "cloud") {
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

        // for (let i = 0; i < 3; i++) {
        //
        //     if (mapBoardGame.getPositionCharacter()[0] - indiceVerticallyUp >= 0 && mapBoardGame.cells[mapBoardGame.getPositionCharacter()[0] - indiceVerticallyUp].className !== "obstacle" ) {
        //
        //         mapBoardGame.cells[mapBoardGame.getPositionCharacter()[0] - indiceVerticallyUp].classList.add("wayPossible");
        //
        //     } else {
        //
        //         i = 3;
        //     }
        //
        //     indiceVerticallyUp += 10;
        // }

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

        // console.log(this.invocation);


        this.cellsClassNameWayPossible = document.getElementsByClassName("wayPossible");

        for (let i = 0 ; i < this.cellsClassNameWayPossible.length; i++) {


            this.cellsClassNameWayPossible[i].addEventListener('click', (e) => {
                // console.log(e.target.classList[i]);
                this.changeInvocation(e);

                // console.log(document.getElementById(this.currentPlayer));

                // document.getElementsByClassName(this.currentPlayer)[0].classList.replace(this.currentPlayer, "wayPossible");
                document.getElementById(this.currentPlayer).classList.add("wayPossible");
                document.getElementById(this.currentPlayer).removeAttribute("id");




                // e.target.classList.replace("wayPossible", this.currentPlayer);
                e.target.classList.remove("wayPossible");
                e.target.id = this.currentPlayer;
                // console.log(cloud.invocation);
                // console.log(typeof cloud);
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
                    console.log(this.currentPlayerInvocation);
                    break;
                case "shiva":
                    e.target.classList.replace("shiva", this.currentPlayerInvocation);
                    this.currentPlayerInvocation = "shiva";
                    console.log(this.currentPlayerInvocation);
                    break;
                case "odin":
                    e.target.classList.replace("odin", this.currentPlayerInvocation);
                    this.currentPlayerInvocation = "odin";
                    console.log(this.currentPlayerInvocation);
                    break;
                case "titan":
                    e.target.classList.replace("titan", this.currentPlayerInvocation);
                    this.currentPlayerInvocation = "titan";
                    console.log(this.currentPlayerInvocation);
                    break;
                case "knightsOfTheRoundTable":
                    e.target.classList.replace("knightsOfTheRoundTable", this.currentPlayerInvocation);
                    this.currentPlayerInvocation = "knightsOfTheRoundTable";
                    console.log(this.currentPlayerInvocation);
                    break;
            }

        }

        if (this.currentPlayer === "cloud") {
            cloud.invocation = this.currentPlayerInvocation;
        } else {
            sephiroth.invocation = this.currentPlayerInvocation;
        }

    }
}

