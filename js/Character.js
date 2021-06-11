class Character{

    constructor(nameCharacter, health, invocation) {
        this.nameCharacter = nameCharacter;
        this.health = health;
        this.invocation = invocation;
        this.getCharacterPosition();
        this.generateWayVerticallyUp();
        this.generateWayVerticallyDown();
        this.generateWayHorizontallyLeft();
        this.generateWayHorizontallyRight();
        this.moveCharacter();
    }

    getCharacterPosition() {
        console.log(mapBoardGame.getPositionCharacter());
    }

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

    moveCharacter() {
        let cellsClassNameWayPossible = document.getElementsByClassName("wayPossible");

        for (let i in cellsClassNameWayPossible) {

            // erreur dans console cellsClassNameWayPossible[i].addEventListener is not a function, voir pourquoi
            cellsClassNameWayPossible[i].addEventListener('click', function (e) {

                document.getElementsByClassName("character1")[0].classList.replace("character1", "wayPossible");
                e.target.classList.remove("wayPossible");
                e.target.classList.add("character1");
            })
        }

    }

}