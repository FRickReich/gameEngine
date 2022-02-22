import engine from '../src/index.js';

import inputManager from './../src/modules/inputManager/inputManager.js'

// create default configurations for your game
const config = {
    game: 
    {
        title: "Example Game",
        version: "0.1.0",
    },
    defaults:
    {
        root: "#game"
    }
}

// create a new instance of the engine
const myGame = engine(config);
// OR:
// const myGame = engine();
// myGame.create(config);

// do things before game start
myGame.awake((game) =>
{
    console.log("Awake");
})

// do things at game start
myGame.start((game) =>
{
    console.log("Start");

    // game.modules().add(inputManager);

    // console.log(game.modules());
})

// do things while game runs
myGame.update((game) =>
{
    console.log("Update");
});

// do things when game stops
// myGame.stop(() => console.log("stop"));
