import keyEvent from '../src/enums/keyEvent.js';
import { Game } from '../src/game.js';
import { Transform } from '../src/transform.js';

class MyGame extends Game
{
    playerEntity;

    init = () =>
    {
        this.modules.Input.listen();

        this.playerEntity = this.scene.getEntityByName("Player");
    }
    
    update = () =>
    {
        this.playerEntity.render();

        this.scene.getEntityByName("Test").render();

        // Moves the entity
        if(this.modules.Input.keyState("w") === keyEvent.KEYPRESSED)
        {
            this.playerEntity.transform.setPositionY(this.playerEntity.transform.position.y -= 0.25 * this.deltaTime);
        }
        if(this.modules.Input.keyState("s") === keyEvent.KEYPRESSED)
        {
            this.playerEntity.transform.setPositionY(this.playerEntity.transform.position.y += 0.25 * this.deltaTime);
        }
        if(this.modules.Input.keyState("a") === keyEvent.KEYPRESSED)
        {
            // this.scene.entitites[0].transform.setPositionX(this.scene.entitites[0].transform.position.x -= 0.25 * this.deltaTime);
            this.playerEntity.transform.setScaleY(this.playerEntity.transform.scale.y += 0.0025 * this.deltaTime);
        }
        if(this.modules.Input.keyState("d") === keyEvent.KEYPRESSED)
        {
            // this.scene.entitites[0].transform.setPositionX(this.scene.entitites[0].transform.position.x += 0.25 * this.deltaTime);
            this.playerEntity.transform.setRotation(this.playerEntity.transform.rotation += 0.25 * this.deltaTime);
        }

        // // Move the scene
        // if(this.modules.Input.keyState("arrowup") === keyEvent.KEYDOWN)
        // {
        //     this.scene.offsetY = this.scene.offsetY - 0.2 * this.deltaTime + "px";
        // }
        // if(this.modules.Input.keyState("arrowdown") === keyEvent.KEYDOWN)
        // {
        //     this.scene.offsetY = this.scene.offsetY + 0.2 * this.deltaTime + "px";
        // }
        // if(this.modules.Input.keyState("arrowleft") === keyEvent.KEYDOWN)
        // {
        //     this.scene.offsetX = this.scene.offsetX - 0.2 * this.deltaTime + "px";
        // }
        // if(this.modules.Input.keyState("arrowright") === keyEvent.KEYDOWN)
        // {
        //     this.scene.offsetX = this.scene.offsetX + 0.2 * this.deltaTime + "px";
        // }
        
    }
}

const myGame = new MyGame();

myGame.addModule("SaveGame");
myGame.addModule("Input");

myGame.scene.addEntity({ name: "Player", transform: new Transform({
    position: { x: 100, y: 100 },
    size: { x: 200, y: 300 },
    scale: { x: 1, y: 1 }
    })
});

myGame.scene.addEntity({ name: "Test" })

myGame.modules.SaveGame.save();

myGame.start();
