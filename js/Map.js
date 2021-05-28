class Map {

    constructor(rowNumber, cellNumber) {

        this.rowNumber = rowNumber;
        this.cellNumber = cellNumber;
        this.generateMap();
        this.getOneRandomNumber();
        this.generateObstacle();
        this.generateInvocation();
        // this.generateCharacters();
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
        console.log(this.arrayContainer.length);
        for (let i = 13; i < this.arrayContainer.length; i++) {
            console.log("ici");
            this.cells[this.arrayContainer[i]].classList.add("invocation");
        }

    }

}