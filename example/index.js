import keyEvent from '../src/enums/keyEvent.js';
import { Game } from '../src/game.js';
import { Transform } from '../src/transform.js';

class MyGame extends Game
{
    init = () =>
    {
        this.modules.Input.listen();
        this.scene.entitites[0].transform.setScaleY(500);
    }
    
    update = () =>
    {
        this.scene.entitites[0].render();
        this.scene.entitites[1].render();

        // Moves the entity
        if(this.modules.Input.keyState("w") === keyEvent.KEYPRESSED)
        {
            this.scene.entitites[0].transform.setPositionY(this.scene.entitites[0].transform.position.y -= 0.25 * this.deltaTime);
        }
        if(this.modules.Input.keyState("s") === keyEvent.KEYPRESSED)
        {
            this.scene.entitites[0].transform.setPositionY(this.scene.entitites[0].transform.position.y += 0.25 * this.deltaTime);
        }
        if(this.modules.Input.keyState("a") === keyEvent.KEYPRESSED)
        {
            this.scene.entitites[0].transform.setPositionX(this.scene.entitites[0].transform.position.x -= 0.25 * this.deltaTime);
        }
        if(this.modules.Input.keyState("d") === keyEvent.KEYPRESSED)
        {
            this.scene.entitites[0].transform.setPositionX(this.scene.entitites[0].transform.position.x += 0.25 * this.deltaTime);
        }

        // Move the scene
        if(this.modules.Input.keyState("arrowup") === keyEvent.KEYDOWN)
        {
            this.scene.moveY(this.scene.offsetY() - 0.2 * this.deltaTime + "px");
        }
        if(this.modules.Input.keyState("arrowdown") === keyEvent.KEYDOWN)
        {
            this.scene.moveY(this.scene.offsetY() + 0.2 * this.deltaTime + "px");
        }
        if(this.modules.Input.keyState("arrowleft") === keyEvent.KEYDOWN)
        {
            this.scene.moveX(this.scene.offsetX() - 0.2 * this.deltaTime + "px");
        }
        if(this.modules.Input.keyState("arrowright") === keyEvent.KEYDOWN)
        {
            this.scene.moveX(this.scene.offsetX() + 0.2 * this.deltaTime + "px");
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
