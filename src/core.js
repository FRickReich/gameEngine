import { Input } from './input.js';

class Core
{
    /**
     * @constructor
     * @param { number } fps current application speed in frames per second.
     * @param { number } frame current frame in the application update loop.
     * @param { number } timestamp current timestamp
     * @param { deltaTime } deltatime a millisecond in consideration of current fps.
     */
    constructor()
    {
        this.fps = 60;
        this.frame = 0;
        this.timestamp;
        this.deltaTime;

        this.input = new Input();

        this.start();
    }

    loop = () =>
    {   
        this.frame = requestAnimationFrame(this.loop.bind(this));
        const currentTime = new Date().getTime();
            
        this.deltaTime = currentTime - (this.timestamp || currentTime);
     
        this.timestamp = currentTime;

        this.update();
     
        // this.x += 10 * dt; // Increase 'x' by 10 units per millisecond
    }

    /**
     * @method start();
     * @description Starting point of the loop
     */
    start = () =>
    {
        this.frame = requestAnimationFrame(this.loop.bind(this));
    }

    /**
     * @method update();
     * @description called each iteration of the loop
     */
    update = () => 
    {
        this.input.listen();
        // this renders every frame

        if(this.input.keyState("a") === "PRESSED")
        {
            console.log("hello world");
        }
    }

    /**
     * @method pause();
     * @description pauses the loop
     */
    pause = () =>
    {
        cancelAnimationFrame(this.frame);
    }
}

export { Core };
