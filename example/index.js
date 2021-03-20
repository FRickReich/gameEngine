import keyEvent from '../src/enums/keyEvent.js';
import { Game } from '../src/game.js';

class MyGame extends Game
{
    init = () =>
    {
        this.modules.Input.listen();
    }

    update = () =>
    {

        if(this.modules.Input.keyState("w") === keyEvent.KEYPRESSED)
        {
            console.log("Key pressed");
        }
    }
}

const myGame = new MyGame();

myGame.addModule("SaveGame");
myGame.addModule("Input");

myGame.modules.SaveGame.save();

myGame.start();
