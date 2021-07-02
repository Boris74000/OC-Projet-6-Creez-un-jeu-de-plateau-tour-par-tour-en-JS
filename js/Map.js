class Map {

    constructor(rowNumber, cellNumber) {

        this.rowNumber = rowNumber;
        this.cellNumber = cellNumber;
        this.generateMap();
        this.getOneRandomNumber();
        this.generateObstacle();
        this.generateInvocation();
        this.generateCharacters();
    }

    generateMap() {

        const table = document.getElementsByTagName('table')[0];

        for (let iRow = 0; iRow < this.rowNumber; iRow++ ) {

            let row = document.createElement('tr');

            for (let iCell = 0; iCell < this.cellNumber; iCell++) {
                row.appendChild(document.createElement('td'));
            }

            table.appendChild(row);

        }
    }

    getOneRandomNumber() {

        this.cells = document.getElementsByTagName('td');

        this.arrayContainer = [];

        this.randomNumber = Math.floor(Math.random() * this.cells.length);

        this.arrayContainer.push(this.randomNumber);

        // console.log(this.arrayContainer);

    }

    generateObstacle() {

        for (let counter = 0; counter < 12; counter++) {
            //the counter is less than five because we already initialise arrayContainer[0] with randomNumber

            // console.log(`arrayContainer ${this.arrayContainer}`);

            let newRandomNumber = Math.floor(Math.random() * this.cells.length);

            // console.log(`newRandomNumber ${newRandomNumber}`);

            while (this.arrayContainer.lastIndexOf(newRandomNumber) !== -1) {
                newRandomNumber = Math.floor(Math.random() * this.cells.length);
            }

            // console.log(`newRandomNumber ${newRandomNumber}`);

            this.arrayContainer.push(newRandomNumber);

            // for (let randomNumberArray of this.arrayContainer) {
            //     console.log(randomNumberArray);
            // }

            // for (let i = 0; i < this.arrayContainer.length; i++) {
            //     this.cells[this.arrayContainer[i]].classList.add("obstacle");
            // }
            // console.log(`arrayContainer ${this.arrayContainer}`);
        }

        this.stylizingObstacle();

    }

    stylizingObstacle() {

        for (let i = 0; i < this.arrayContainer.length; i++) {
            this.cells[this.arrayContainer[i]].classList.add("obstacle");
        }

    }

    generateInvocation() {
        // console.log(this.arrayContainer);
        // console.log(this.cells);
        for (let counter = 0; counter < 4; counter++) {
            //the counter is less than five because we already initialise arrayContainer[0] with randomNumber

            // console.log(`arrayContainer ${this.arrayContainer}`);

            let newRandomNumber = Math.floor(Math.random() * this.cells.length);

            // console.log(`newRandomNumber ${newRandomNumber}`);

            while (this.arrayContainer.lastIndexOf(newRandomNumber) !== -1) {
                newRandomNumber = Math.floor(Math.random() * this.cells.length);
            }

            // console.log(`newRandomNumber ${newRandomNumber}`);

            this.arrayContainer.push(newRandomNumber);

            // console.log(`arrayContainer ${this.arrayContainer}`);
        }

        this.stylizingInvocation();

    }

    stylizingInvocation() {
        // console.log(this.arrayContainer.length);

        this.invocationNames = ["chocoMog", "shiva", "titan", "odin", "knightsOfTheRoundTable"];
        let invocationNamesIndice = 1;

        for (let i = 13; i < this.arrayContainer.length; i++) {

                this.cells[this.arrayContainer[i]].classList.add(this.invocationNames[invocationNamesIndice]);
                invocationNamesIndice++;

        }

    }

    generateCharacters() {
        for (let counter = 0; counter < 2; counter++) {

            //the counter is less than five because we already initialise arrayContainer[0] with randomNumber

            let newRandomNumber = Math.floor(Math.random() * this.cells.length);

            // Si pas de doublons entre arrayContainer et newRandomNumber
            if (this.arrayContainer.indexOf(newRandomNumber) === -1) {

                // Si newRandomNumber - 10
                if (newRandomNumber - 10 >= 0 && newRandomNumber + 10 <= 99 &&
                    newRandomNumber -1 >= 0 && newRandomNumber + 1 <= 99 ) {

                    // Si newRandomNumber - 10 n'est pas déjà dans arrayContainer et que la classe de la cellule newRandomNumber - 10 différent de character
                    if ((this.arrayContainer.indexOf(newRandomNumber - 10) === -1 && this.cells[newRandomNumber - 10].className !== "character") &&
                        (this.arrayContainer.indexOf(newRandomNumber + 10) === -1 && this.cells[newRandomNumber + 10].className !== "character") &&
                        (this.arrayContainer.indexOf(newRandomNumber - 1) === -1 && this.cells[newRandomNumber - 1].className !== "character") &&
                        (this.arrayContainer.indexOf(newRandomNumber + 1) === -1 && this.cells[newRandomNumber + 1].className !== "character")) {

                        this.arrayContainer.push(newRandomNumber);

                        this.getPositionCharacter();
                        this.stylizingCharacters();
                    }
                    else {
                        // console.log("newRandomNumber - 10 pas déjà dans arrayContainer, classe cellule newRandomNumber - 10 différent de character");
                        counter --;
                    }
                } else {
                    // console.log("newRandomNumber - 10 inférieur à 0 ou newRandomNumber + 10 supérieur à 99 ");
                    counter--;
                }


            // Sinon on décrémente la boucle pour regénérer un nombre et recommencer le contrôle des doublons
            } else {
                counter--;
            }
        }

    }

    getPositionCharacter() {
        let characterPosition = [];

        for (let i = 17; i < this.arrayContainer.length; i++) {
            characterPosition.push(this.arrayContainer[i])

        }

        return characterPosition;
    }

    stylizingCharacters() {
        // console.log(this.arrayContainer.length);
        let characterNumber = 1;

        for (let i = 17; i < this.arrayContainer.length; i++) {
            // console.log(i);
            this.cells[this.arrayContainer[i]].classList.add(`character${characterNumber}`);
            characterNumber++;
        }

    }

}