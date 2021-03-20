import module from './enums/module.js';

/**
 * @todo recreate game class more OOP
 */
class Game
{ 
    /**
     * @constructor
     */
    constructor()
    {
        this.fps = 60;
        this.timestamp;
        this.frame = 0;
        this.oldFrame;
        this.interval = 1000/this.fps;
        this.deltaTime;
        this.modules = {};
        this.scene = undefined;

        this.setup();
    }

    setup = ({ target, size, position, background } = {}) =>
    {
        this.target = target || "#game";
        this.scene = document.querySelector(this.target);
        this.size = size || { width: "100vw", height: "100vh" }
        this.position = position || "absolute";
        this.background = background || "#708090";

        const body = document.querySelector("body");
        body.style.padding = "0";
        body.style.margin = "0";

        this.scene.style.background = this.background;
        this.scene.style.height = this.size.height;
        this.scene.style.width = this.size.width;
        this.scene.style.position = this.position;
        this.scene.style.overflow = "hidden";
        this.scene.style.zIndex = "-10000";
    }
    
    start = () =>
    {   
        try
        {
            this.init();
        }
        catch (error)
        {
            console.log("ERROR: No .init(); method found in '" + this.constructor.name + "' class.");
        }
        this.frame = requestAnimationFrame(this.gameLoop.bind(this));

    };

    gameLoop(timestamp)
    {
        this.timestamp = timestamp;

        if(!this.oldFrame)
        {
            this.oldFrame = timestamp;
        }

        this.frame = requestAnimationFrame(this.gameLoop.bind(this));
        
        this.deltaTime = timestamp - this.oldFrame;

        if(this.deltaTime > this.interval)
        {
            this.oldFrame = timestamp - (this.deltaTime % (1000/this.fps));

            try
            {
                this.update();
            }
            catch (error)
            {
                console.log("ERROR: No .update(); method found in '" + this.constructor.name + "' class.");
            }
        }
    }

    /**
     * @method addModule();
     * @description Adds a module to the game instance
     * @param { string } name 
     */
    addModule(name)
    {
        try
        {
            this.modules[name] = new module[name]({ name: this.constructor.name });
        }
        catch (error)
        {
            console.log("ERROR: Could not find a module called " + name);
        }
    }
}

export { Game };
