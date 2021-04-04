import Game from '../src/game.js';

class MyGame extends Game
{   
    init = () =>
    {
        this.addModule("Input");
        this.addModule("UI");
        
        inputManager = this.modules.Input;
        ui = this.modules.UI;

        inputManager.listen();

        console.log(ui);
    }
    update = () =>
    {
        if(inputManager.keyState("w") === inputManager.event.KEYPRESSED)
        {
            console.log("test");
        }
    }
}

let inputManager;
let ui;
const myGame = new MyGame();

myGame.start();



// import { Transform } from '../src/transform.js';

// class MyGame extends Game
// {
//     playerEntity;

//     init = () =>
//     {
//         this.scene.addEntity({ name: "Test" })

//         this.modules.Input.listen();

//         this.playerEntity = this.scene.getEntityByName("Player");
//     }
    
//     update = () =>
//     {
//         this.playerEntity.render();

//         this.scene.getEntityByName("Test").render();

//         // Moves the entity
//         if(this.modules.Input.keyState("w") === keyEvent.KEYPRESSED)
//         {
//             this.playerEntity.transform.setPositionY(this.playerEntity.transform.position.y -= 0.25 * this.deltaTime);
//         }
//         if(this.modules.Input.keyState("s") === keyEvent.KEYPRESSED)
//         {
//             this.playerEntity.transform.setPositionY(this.playerEntity.transform.position.y += 0.25 * this.deltaTime);
//         }
//         if(this.modules.Input.keyState("a") === keyEvent.KEYPRESSED)
//         {
//             // this.scene.entitites[0].transform.setPositionX(this.scene.entitites[0].transform.position.x -= 0.25 * this.deltaTime);
//             this.playerEntity.transform.setScaleY(this.playerEntity.transform.scale.y += 0.0025 * this.deltaTime);
//         }
//         if(this.modules.Input.keyState("d") === keyEvent.KEYPRESSED)
//         {
//             // this.scene.entitites[0].transform.setPositionX(this.scene.entitites[0].transform.position.x += 0.25 * this.deltaTime);
//             this.playerEntity.transform.setRotation(this.playerEntity.transform.rotation += 0.25 * this.deltaTime);
//         }

//         if(this.modules.Input.keyState("arrowup") === keyEvent.KEYDOWN)
//         {
//             this.modules.EventEmitter.fire('testEvent', "hello");
//         }

//         // // Move the scene
//         // if(this.modules.Input.keyState("arrowup") === keyEvent.KEYDOWN)
//         // {
//         //     this.scene.offsetY = this.scene.offsetY - 0.2 * this.deltaTime + "px";
//         // }
//         // if(this.modules.Input.keyState("arrowdown") === keyEvent.KEYDOWN)
//         // {
//         //     this.scene.offsetY = this.scene.offsetY + 0.2 * this.deltaTime + "px";
//         // }
//         // if(this.modules.Input.keyState("arrowleft") === keyEvent.KEYDOWN)
//         // {
//         //     this.scene.offsetX = this.scene.offsetX - 0.2 * this.deltaTime + "px";
//         // }
//         // if(this.modules.Input.keyState("arrowright") === keyEvent.KEYDOWN)
//         // {
//         //     this.scene.offsetX = this.scene.offsetX + 0.2 * this.deltaTime + "px";
//         // }
        
//     }
// }

// const myGame = new MyGame();

// myGame.addModule("SaveGame");
// myGame.addModule("Input");
// myGame.addModule("EventEmitter");

// const testEventHandler = (data) => {
//     console.log('Was fired: ', data);
// };

// myGame.modules.EventEmitter.on('testEvent', testEventHandler);

// myGame.scene.addEntity({ name: "Player", transform: new Transform({
//     position: { x: 100, y: 100 },
//     size: { x: 200, y: 300 },
//     scale: { x: 1, y: 1 }
//     })
// });

// myGame.modules.SaveGame.save();

// myGame.start();
