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

    generateObstacle() {
        const cells = document.getElementsByTagName('td');
        // console.log(cells);

        let arrayContainer = []; // this arrays holds the five random numbers generated;

        const genNum = Math.floor(Math.random() * cells.length);

        arrayContainer.push(genNum);

        for (let counter = 0; counter < 5; counter++) {
            //the counter is less than five because we already initialise arrayContainer[0] with genNum
            let newGen = Math.floor(Math.random() * cells.length);
            while (arrayContainer.lastIndexOf(newGen) !== -1) {
                newGen = Math.floor(Math.random() * cells.length);
            }
            arrayContainer.push(newGen);
        }

        for (let i = 0; i < arrayContainer.length; i++) {

            cells[arrayContainer[i]].style.backgroundColor = "black";
        }


        // =====  Fonctionne mais ne gère pas les doublons =================
        // for (let i = 0; i < 6; i++) {
        // let randomObstacle =  Math.floor(Math.random() * cells.length);
        // console.log(randomObstacle);
        // cells[randomObstacle].style.backgroundColor = "black";
        //}
        // =================================================================
    }

}