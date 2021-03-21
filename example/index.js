import keyEvent from '../src/enums/keyEvent.js';
import { Game } from '../src/game.js';
import { Transform } from '../src/transform.js';

class MyGame extends Game
{
    init = () =>
    {
        this.modules.Input.listen();

        this.entities[0].transform.setScaleY(600);
    }
    
    update = () =>
    {
        this.entities[0].render();
        this.entities[1].render();

        if(this.modules.Input.keyState("w") === keyEvent.KEYPRESSED)
        {
            // console.log("Key pressed");
            this.entities[0].transform.setPositionY(this.entities[0].transform.position.y -= 0.25 * this.deltaTime);
        }
    }
}

const myGame = new MyGame();

myGame.addModule("SaveGame");
myGame.addModule("Input");


myGame.addEntity({ name: "Player", transform: new Transform({
    position: { x: 100, y: 100 },
    scale: { x: 200, y: 200 }
    })
});

myGame.addEntity({ name: "Test" })

myGame.modules.SaveGame.save();

myGame.start();
