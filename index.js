import { Input } from './src/input.js';
import { BlockEntity } from './src/entities/blockEntity.js';
import { Game } from './src/game.js';

// let newEntity = new Entity({
//     name: "TestEntity",
//     transform: new Transform({
//         position: { x: 10, y: 20 },
//         scale: { x: 100, y: 100 }
//     })
// });

const game = new Game();
game.resetBody();

let secondEntity = new BlockEntity({ name: "Test Element" });
secondEntity.transform.setScale(100, 200);
secondEntity.transform.setPosition(200, 300);
secondEntity.setBackgroundColor("#F04400");

/**
 * @class Core
 */
class Core
{
    /**
     * @constructor
     * @param { number } fps current application speed in frames per second.
     * @param { number } frame current frame in the application update loop.
     * @param { number } timestamp current timestamp
     * @param { number } deltatime a millisecond in consideration of current fps.
     */
    constructor()
    {
        this.fps = 60;
        this.frame = 0;
        this.timestamp;
        this.deltaTime;

        this.input = new Input();

        this.start();
    };

    /**
     * @method loop();
     * @description General game loop and all its configurations.
     */
    loop = () =>
    {   
        this.frame = requestAnimationFrame(this.loop.bind(this));
        const currentTime = new Date().getTime();
            
        this.deltaTime = currentTime - (this.timestamp || currentTime);
     
        this.timestamp = currentTime;

        this.update();
     
        // this.x += 10 * dt; // Increase 'x' by 10 units per millisecond
    };

    /**
     * @method start();
     * @description Starting point of the loop
     */
    start = () =>
    {
        // newEntity.create();
        secondEntity.create();

        this.frame = requestAnimationFrame(this.loop.bind(this));
    };

    /**
     * @method update();
     * @description called each iteration of the loop
     */
    update = () => 
    {
        this.input.listen();
        // this renders every frame

        // newEntity.render();
        secondEntity.render();

        if(this.input.keyState("space") === "PRESSED")
        {
            // newEntity.transform.setScaleX(newEntity.transform.scale.x += 0.1 * this.deltaTime);
        }

        if(this.input.keyState("w") === "PRESSED")
        {
            secondEntity.transform.setPositionY(secondEntity.transform.position.y -= 0.25 * this.deltaTime);    
        }
        
        if(this.input.keyState("s") === "PRESSED")
        {
            secondEntity.transform.setPositionY(secondEntity.transform.position.y += 0.25 * this.deltaTime);
        }

        if(this.input.keyState("a") === "PRESSED")
        {
            secondEntity.transform.setPositionX(secondEntity.transform.position.x -= 0.25 * this.deltaTime);    
        }

        if(this.input.keyState("d") === "PRESSED")
        {
            secondEntity.transform.setPositionX(secondEntity.transform.position.x += 0.25 * this.deltaTime);    
        }
    };

    /**
     * @method pause();
     * @description pauses the loop
     */
    pause = () =>
    {
        cancelAnimationFrame(this.frame);
    };
}

new Core();