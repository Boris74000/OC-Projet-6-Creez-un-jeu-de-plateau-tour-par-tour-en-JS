class Character{

    constructor(nameCharacter, health, invocation) {
        this.nameCharacter = nameCharacter;
        this.health = health;
        this.invocation = invocation;
        this.getCharacterPosition();
        this.moveCharacterVerticallyUp();
        this.moveCharacterVerticallyDown();
        this.moveCharacterHorizontallyLeft();
        this.moveCharacterHorizontallyRight();

    }

    getCharacterPosition() {
        console.log(mapBoardGame.getPositionCharacter());
    }

    moveCharacterVerticallyUp() {
        let indiceVerticallyUp = 10;
        // let CellsWayPossible = [];

        for (let i = 0; i < 3; i++) {

            if (mapBoardGame.getPositionCharacter()[0] - indiceVerticallyUp >= 0 && mapBoardGame.cells[mapBoardGame.getPositionCharacter()[0] - indiceVerticallyUp].className !== "obstacle" ) {
                // CellsWayPossible.push(mapBoardGame.cells[mapBoardGame.getPositionCharacter()[0] - indiceVerticallyUp]);
                mapBoardGame.cells[mapBoardGame.getPositionCharacter()[0] - indiceVerticallyUp].classList.add("wayPossibleStyle");
            } else {
                i = 3;
            }

            indiceVerticallyUp += 10;
        }

    }

    moveCharacterVerticallyDown() {
        let indiceVerticallyDown = 10;
        // let CellsWayPossible = [];

        for (let i = 0; i < 3; i++) {

            if (mapBoardGame.getPositionCharacter()[0] + indiceVerticallyDown <= 99 && mapBoardGame.cells[mapBoardGame.getPositionCharacter()[0] + indiceVerticallyDown].className !== "obstacle" ) {
                // CellsWayPossible.push(mapBoardGame.cells[mapBoardGame.getPositionCharacter()[0] - indiceVerticallyUp]);
                mapBoardGame.cells[mapBoardGame.getPositionCharacter()[0] + indiceVerticallyDown].classList.add("wayPossibleStyle");
            } else {
                i = 3;
            }

            indiceVerticallyDown += 10;
        }

    }

    moveCharacterHorizontallyLeft() {
        let indiceHorizontallyLeft = 1;
        // let CellsWayPossible = [];

        for (let i = 0; i < 3; i++) {

            if (mapBoardGame.getPositionCharacter()[0] - indiceHorizontallyLeft >= 0 && mapBoardGame.cells[mapBoardGame.getPositionCharacter()[0] - indiceHorizontallyLeft].className !== "obstacle" ) {
                console.log()
                let units = mapBoardGame.getPositionCharacter()[0] - indiceHorizontallyLeft % 10;
                let tens = (mapBoardGame.getPositionCharacter()[0] - indiceHorizontallyLeft - units) / 10;
                console.log(tens);

                mapBoardGame.cells[mapBoardGame.getPositionCharacter()[0] - indiceHorizontallyLeft].classList.add("wayPossibleStyle");
            } else {
                i = 3;
            }

            indiceHorizontallyLeft += 1;
        }

    }

    moveCharacterHorizontallyRight() {
        let indiceHorizontallyRight = 1;
        // let CellsWayPossible = [];

        for (let i = 0; i < 3; i++) {

            if (mapBoardGame.getPositionCharacter()[0] + indiceHorizontallyRight <= 99 && mapBoardGame.cells[mapBoardGame.getPositionCharacter()[0] + indiceHorizontallyRight].className !== "obstacle" ) {
                // CellsWayPossible.push(mapBoardGame.cells[mapBoardGame.getPositionCharacter()[0] - indiceVerticallyUp]);
                mapBoardGame.cells[mapBoardGame.getPositionCharacter()[0] + indiceHorizontallyRight].classList.add("wayPossibleStyle");
            } else {
                i = 3;
            }

            indiceHorizontallyRight += 1;
        }

    }

}