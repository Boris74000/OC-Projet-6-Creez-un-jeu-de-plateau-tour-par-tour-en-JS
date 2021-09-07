const chocoMog = new Invocation("Choco/Mog", "chocoMog",10);
const shiva = new Invocation("Shiva","shiva", 15);
const titan = new Invocation("Titan","titan", 20);
const odin = new Invocation("Odin","odin", 25);
const knightsOfTheRoundTable = new Invocation("Knights Of Round", "knightsOfRound", 30);

const cloud = new Character("cloud", 100, chocoMog, true, false);
const sephiroth = new Character("sephiroth", 100, chocoMog, false, false);

const mapBoardGame = new Map(10,10);

const newGame = new Game();

const audio = new GameMusic();

newGame.createDivCharacters();
newGame.hideStartGameScreen();
newGame.getCurrentPlayerPosition();
newGame.generateWayVerticallyUp();
newGame.generateWayVerticallyDown();
newGame.generateWayHorizontallyLeft();
newGame.generateWayHorizontallyRight();
newGame.checkElClicked();



