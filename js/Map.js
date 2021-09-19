"use strict";

class Map {
    constructor(rowNumber, cellNumber) {
        this.rowNumber = rowNumber;
        this.cellNumber = cellNumber;
        this.generateMap();
        this.getOneRandomNumber();
        this.generateObstacle();
        this.generateInvocation();
        this.generateCharacters();
        this.displayCharacteristicsCharacters();
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

    generateRandomNumberMethod() {
        return Math.floor(Math.random() * this.cells.length);
    }

    getOneRandomNumber() {
        this.cells = document.getElementsByTagName('td');

        this.arrayContainer = [];

        this.randomNumber = this.generateRandomNumberMethod();

        this.arrayContainer.push(this.randomNumber);
    }

    generateObstacle() {
        for (let counter = 0; counter < 12; counter++) {
            //the counter is less than twelve because we already initialise arrayContainer[0] with randomNumber
            let newRandomNumber = this.generateRandomNumberMethod();

            while (this.arrayContainer.lastIndexOf(newRandomNumber) !== -1) {
                newRandomNumber = this.generateRandomNumberMethod();
            }

            this.arrayContainer.push(newRandomNumber);
        }

        this.stylizingObstacle();
    }

    stylizingObstacle() {
        for (let i = 0; i < this.arrayContainer.length; i++) {
            this.cells[this.arrayContainer[i]].classList.add("obstacle");
        }
    }

    generateInvocation() {
        for (let counter = 0; counter < 4; counter++) {
            //the counter is less than four because we already initialise arrayContainer[0] with randomNumber

            let newRandomNumber = Math.floor(Math.random() * this.cells.length);

            while (this.arrayContainer.lastIndexOf(newRandomNumber) !== -1) {
                newRandomNumber = Math.floor(Math.random() * this.cells.length);
            }

            this.arrayContainer.push(newRandomNumber);
        }

        this.stylizingInvocation();
    }

    stylizingInvocation() {
        this.invocationNames = ["chocoMog", "shiva", "titan", "odin", "knightsOfRound"];
        let invocationNamesIndice = 1;

        for (let i = 13; i < this.arrayContainer.length; i++) {

                this.cells[this.arrayContainer[i]].classList.add(this.invocationNames[invocationNamesIndice]);
                invocationNamesIndice++;
        }
    }

    generateCharacters() {
        for (let counter = 0; counter < 2; counter++) {
            //the counter is less than two because we already initialise arrayContainer[0] with randomNumber

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

                        this.stylizingCharacters();
                    }

                    else {

                        counter --;

                    }

                } else {

                    counter--;
                }

            // Sinon on décrémente la boucle pour regénérer un nombre et recommencer le contrôle des doublons
            } else {

                counter--;

            }
        }
    }

    stylizingCharacters() {
        let characterName = ["cloud", "sephiroth"];
        let characterNameIndice = 0;
        for (let i = 17; i < this.arrayContainer.length; i++) {
            this.cells[this.arrayContainer[i]].setAttribute("id", characterName[characterNameIndice]);
            characterNameIndice++;
        }
    }

    displayCharacteristicsCharacters() {
        // On affiche les caractéristiques de chaque joueur
        document.getElementById("cloudHealthPoints").innerHTML = cloud.health;
        document.getElementById("cloudInvocationPossessed").innerHTML = cloud.invocation.nameInvocation;

        document.getElementById("sephirothHealthPoints").innerHTML = sephiroth.health;
        document.getElementById("sephirothInvocationPossessed").innerHTML = sephiroth.invocation.nameInvocation;
    }

}