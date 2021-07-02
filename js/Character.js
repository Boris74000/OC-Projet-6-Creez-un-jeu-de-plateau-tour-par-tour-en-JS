class Character{

    constructor(nameCharacter, health, invocation) {
        this.nameCharacter = nameCharacter;
        this.health = health;
        this.invocation = invocation;
        // this.getCharacterPosition();
        this.generateWayVerticallyUp();
        this.generateWayVerticallyDown();
        this.generateWayHorizontallyLeft();
        this.generateWayHorizontallyRight();
        this.moveCharacter();
        // this.changeInvocations();
        this.testPerso();
    }

    // getCharacterPosition() {
    //     console.log(mapBoardGame.getPositionCharacter());
    // }

    generateWayVerticallyUp() {
        let indiceVerticallyUp = 10;

        for (let i = 0; i < 3; i++) {

            if (mapBoardGame.getPositionCharacter()[0] - indiceVerticallyUp >= 0 && mapBoardGame.cells[mapBoardGame.getPositionCharacter()[0] - indiceVerticallyUp].className !== "obstacle" ) {

                mapBoardGame.cells[mapBoardGame.getPositionCharacter()[0] - indiceVerticallyUp].classList.add("wayPossible");

            } else {

                i = 3;
            }

            indiceVerticallyUp += 10;
        }

    }

    generateWayVerticallyDown() {
        let indiceVerticallyDown = 10;

        for (let i = 0; i < 3; i++) {

            if (mapBoardGame.getPositionCharacter()[0] + indiceVerticallyDown <= 99 && mapBoardGame.cells[mapBoardGame.getPositionCharacter()[0] + indiceVerticallyDown].className !== "obstacle" ) {

                mapBoardGame.cells[mapBoardGame.getPositionCharacter()[0] + indiceVerticallyDown].classList.add("wayPossible");

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
            let unitsPositionCharacter = mapBoardGame.getPositionCharacter()[0] % 10;
            let tensPositionCharacter = (mapBoardGame.getPositionCharacter()[0] - unitsPositionCharacter) / 10;

            // On récupère la dizaine de l'indice de la position du personnage - indiceHorizontallyLeft
            let unitsPositionCharacterLessIndex = (mapBoardGame.getPositionCharacter()[0] - indiceHorizontallyLeft) % 10;
            let tensPositionCharacterLessIndex = (mapBoardGame.getPositionCharacter()[0] - indiceHorizontallyLeft - unitsPositionCharacterLessIndex) / 10;

            // Si la soustraction des 2 dizaines est égal à 0 (on est donc sur la même ligne)

            if (mapBoardGame.getPositionCharacter()[0] - indiceHorizontallyLeft >= 0 &&
                mapBoardGame.cells[mapBoardGame.getPositionCharacter()[0] - indiceHorizontallyLeft].className !== "obstacle" &&
                tensPositionCharacter - tensPositionCharacterLessIndex === 0) {

                mapBoardGame.cells[mapBoardGame.getPositionCharacter()[0] - indiceHorizontallyLeft].classList.add("wayPossible");

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
            let unitsPositionCharacter = mapBoardGame.getPositionCharacter()[0] % 10;
            let tensPositionCharacter = (mapBoardGame.getPositionCharacter()[0] - unitsPositionCharacter) / 10;

            // On récupère la dizaine de l'indice de la position du personnage - indiceHorizontallyRight
            let unitsPositionCharacterLessIndex = (mapBoardGame.getPositionCharacter()[0] + indiceHorizontallyRight) % 10;
            let tensPositionCharacterLessIndex = (mapBoardGame.getPositionCharacter()[0] + indiceHorizontallyRight - unitsPositionCharacterLessIndex) / 10;

            // Si la soustraction des 2 dizaines est égal à 0 (on est donc sur la même ligne)

            if (mapBoardGame.getPositionCharacter()[0] + indiceHorizontallyRight <= 99 &&
                mapBoardGame.cells[mapBoardGame.getPositionCharacter()[0] + indiceHorizontallyRight].className !== "obstacle" &&
                tensPositionCharacter - tensPositionCharacterLessIndex === 0) {

                mapBoardGame.cells[mapBoardGame.getPositionCharacter()[0] + indiceHorizontallyRight].classList.add("wayPossible");

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


                for (let i = 0; i < e.target.classList.length; i++) {

                    // if (e.target.classList[i] === "chocoMog" || e.target.classList[i] === "shiva" || e.target.classList[i] === "odin" ||
                    //     e.target.classList[i] === "titan" || e.target.classList[i] === "knightsOfTheRoundTable") {
                    //
                    //     console.log(e.target.classList);
                    //     console.log(e.target.classList[i]);
                    //
                    // }

                    switch (e.target.classList[i]) {
                        case "chocoMog":
                            e.target.classList.replace("chocoMog", this.invocation);
                            this.invocation = "chocoMog";
                            console.log(this.invocation);
                            break;
                        case "shiva":
                            e.target.classList.replace("shiva", this.invocation);
                            this.invocation = "shiva";
                            console.log(this.invocation);
                            break;
                        case "odin":
                            e.target.classList.replace("odin", this.invocation);
                            this.invocation = "odin";
                            console.log(this.invocation);
                            break;
                        case "titan":
                            e.target.classList.replace("titan", this.invocation);
                            this.invocation = "titan";
                            console.log(this.invocation);
                            break;
                        case "knightsOfTheRoundTable":
                            e.target.classList.replace("knightsOfTheRoundTable", this.invocation);
                            this.invocation = "knightsOfTheRoundTable";
                            console.log(this.invocation);
                            break;
                    }

                }

                document.getElementsByClassName("character1")[0].classList.replace("character1", "wayPossible");
                e.target.classList.replace("wayPossible", "character1");
            })
        }

        console.log(this.invocation);

    }

    // changeInvocations() {
    //     for (let i = 0 ; i < this.cellsClassNameWayPossible.length; i++) {
    //
    //         this.cellsClassNameWayPossible[i].addEventListener('click', (e) => {
    //
    //             console.log(e.target.classList[0]);
    //         })
    //     }
    // }

    testPerso() {
        console.log('iciPerso');
    }



}