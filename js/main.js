let mapBoardGame = new Map(10,10);

let chocoMog = new Invocation("chocoMog", 10);
let shiva = new Invocation("shiva", 15);
let titan = new Invocation("titan", 20);
let odin = new Invocation("odin", 25);
let knightsOfTheRoundTable = new Invocation("knightsOfTheRoundTable", 30);

// chocoMog.test();

let cloud = new Character("cloud", 100, chocoMog.nameInvocation, true);
let sephiroth = new Character("sephiroth", 100, chocoMog.nameInvocation, false);

let newGame = new Game();

// newGame.determineEnemyPlayer();
newGame.getCurrentPlayerPosition();
newGame.generateWayVerticallyUp();
newGame.generateWayVerticallyDown();
newGame.generateWayHorizontallyLeft();
newGame.generateWayHorizontallyRight();
newGame.events();
// newGame.moveCharacter();