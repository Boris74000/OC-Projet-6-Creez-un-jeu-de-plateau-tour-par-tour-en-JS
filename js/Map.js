class Map {

    constructor(rowNumber, cellNumber) {

        this.rowNumber = rowNumber;
        this.cellNumber = cellNumber;
        this.generateMap();
        this.generateObstacle();
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

    getManyRandomNumberWithoutDuplicates() {

        for (let counter = 0; counter < 14; counter++) {
            //the counter is less than five because we already initialise arrayContainer[0] with randomNumber

            // console.log(`arrayContainer ${this.arrayContainer}`);

            let newRandomNumber = Math.floor(Math.random() * this.cells.length);

            // console.log(`newRandomNumber ${newRandomNumber}`);

            while (this.arrayContainer.lastIndexOf(newRandomNumber) !== -1) {
                newRandomNumber = Math.floor(Math.random() * this.cells.length);
            }

            // console.log(`newRandomNumber ${newRandomNumber}`);

            this.arrayContainer.push(newRandomNumber);

            console.log(`arrayContainer ${this.arrayContainer}`);
        }
    }

    stylizingObstacle() {

        // Obstacles
        for (let i = 0; i < 8; i++) {
            this.cells[this.arrayContainer[i]].style.backgroundColor = "black";
        }

        // Invocations
        for (let i = 8; i < 13; i++) {
            this.cells[this.arrayContainer[i]].style.backgroundColor = "red";
        }

        // Personnages
        for (let i = 13; i < 15; i++) {
            this.cells[this.arrayContainer[i]].style.backgroundColor = "blue";
        }

    }

    generateObstacle() {

        this.getOneRandomNumber();
        this.getManyRandomNumberWithoutDuplicates();
        this.stylizingObstacle();

        // =====  Fonctionne mais ne gère pas les doublons =================
        // for (let i = 0; i < 6; i++) {
        // let randomObstacle =  Math.floor(Math.random() * cells.length);
        // console.log(randomObstacle);
        // cells[randomObstacle].style.backgroundColor = "black";
        //}
        // =================================================================
    }

}