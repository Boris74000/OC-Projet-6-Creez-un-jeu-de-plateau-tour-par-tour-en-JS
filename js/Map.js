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
        for (let i = 13; i < this.arrayContainer.length; i++) {
            // console.log("ici");
            this.cells[this.arrayContainer[i]].classList.add("invocation");
        }

    }

    generateCharacters() {
        for (let counter = 0; counter < 2; counter++) {

            //the counter is less than five because we already initialise arrayContainer[0] with randomNumber

            // console.log(`arrayContainer ${this.arrayContainer}`);

            let newRandomNumber = Math.floor(Math.random() * this.cells.length);

            // Si pas de doublons entre arrayContainer et newRandomNumber
            if (this.arrayContainer.indexOf(newRandomNumber) === -1) {

                // console.log(newRandomNumber);
                // console.log(this.arrayContainer);
                //
                // console.log(this.cells[newRandomNumber]);
                // console.log(this.cells[newRandomNumber - 10]);
                // console.log(this.cells[newRandomNumber + 10]);
                // console.log(this.cells[newRandomNumber - 1]);
                // console.log(this.cells[newRandomNumber + 1]);

                // console.log(newRandomNumber - 10);
                // console.log(newRandomNumber + 10);

                // Si newRandomNumber - 10
                if (newRandomNumber - 10 >= 0 && newRandomNumber + 10 <= 99 &&
                    newRandomNumber -1 >= 0 && newRandomNumber + 1 <= 99 ) {

                    // Si newRandomNumber - 10 n'est pas d??j?? dans arrayContainer que la classe de la cellule newRandomNumber - 10 diff??rent de character
                    if ((this.arrayContainer.indexOf(newRandomNumber - 10) === -1 && this.cells[newRandomNumber - 10].className !== "character") &&
                        (this.arrayContainer.indexOf(newRandomNumber + 10) === -1 && this.cells[newRandomNumber + 10].className !== "character") &&
                        (this.arrayContainer.indexOf(newRandomNumber - 1) === -1 && this.cells[newRandomNumber - 1].className !== "character") &&
                        (this.arrayContainer.indexOf(newRandomNumber + 1) === -1 && this.cells[newRandomNumber + 1].className !== "character")) {

                        // console.log("ici");
                        //
                        // console.log(`arrayContainer ${this.arrayContainer}`);
                        // console.log(this.arrayContainer[this.arrayContainer.length - 1] + 10);
                        //
                        // console.log(`newRandomNumber ${newRandomNumber}`);

                        this.arrayContainer.push(newRandomNumber);

                        // console.log(`arrayContainer ${this.arrayContainer}`);

                        this.stylizingCharacters();
                    }
                    else {
                        // console.log("newRandomNumber - 10 pas d??j?? dans arrayContainer, classe cellule newRandomNumber - 10 diff??rent de character");
                        counter --;
                    }
                } else {
                    // console.log("newRandomNumber - 10 inf??rieur ?? 0 ou newRandomNumber + 10 sup??rieur ?? 99 ");
                    counter--;
                }


            // Sinon on d??cr??mente la boucle pour reg??n??rer un nombre et recommencer le contr??le des doublons
            } else {
                // console.log('doublons');
                counter--;
            }
        }

            // console.log(`newRandomNumber ${newRandomNumber}`);

          /*  while (this.arrayContainer.lastIndexOf(newRandomNumber) !== -1 ) {
            // &&
            //         (newRandomNumber !== [this.arrayContainer.length - 1] -10 &&
            //             (newRandomNumber !== [this.arrayContainer.length - 1] -10 && (newRandomNumber !== [this.arrayContainer.length - 1] -10 ))

                newRandomNumber = Math.floor(Math.random() * this.cells.length);
            }

            // if (newRandomNumber === this.arrayContainer[])
        }*/
    }

    stylizingCharacters() {
        // console.log(this.arrayContainer.length);
        for (let i = 17; i < this.arrayContainer.length; i++) {
            // console.log("ici");
            this.cells[this.arrayContainer[i]].classList.add("character");
        }
    }

}