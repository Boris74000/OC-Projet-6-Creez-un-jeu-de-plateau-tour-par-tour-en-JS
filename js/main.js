let chocoMog = new Invocation("chocoMog", 10);
let shiva = new Invocation("shiva", 15);
let titan = new Invocation("titan", 20);
let odin = new Invocation("odin", 25);
let knightsOfTheRoundTable = new Invocation("Chevalier de la table ronde", 30);

let cloud = new Character("cloud", 100, chocoMog, true, false);
let sephiroth = new Character("sephiroth", 100, chocoMog, false, false);

let mapBoardGame = new Map(10,10);

let newGame = new Game();

newGame.createDivCharacters();
newGame.hideStartGameScreen();
newGame.getCurrentPlayerPosition();
newGame.generateWayVerticallyUp();
newGame.generateWayVerticallyDown();
newGame.generateWayHorizontallyLeft();
newGame.generateWayHorizontallyRight();
newGame.checkElClicked();


