import module from './enums/module.js';
import { Entity } from './entity.js';
import { Scene } from './scene.js';

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
        this.entities = [];

        this.setup();
    }

    setup = ({ target, size, position, background } = {}) =>
    {
        this.target = target || "#game";

        this.viewport = document.querySelector(this.target);
        this.size = size || { width: "100vw", height: "100vh" }
        this.position = position || "absolute";
        this.background = background || "#708090";

        this.scene = new Scene();
        this.scene.draw();
        
        this.viewport.appendChild(this.scene.element);

        const body = document.querySelector("body");
        body.style.padding = "0";
        body.style.margin = "0";

        this.viewport.style.background = this.background;
        this.viewport.style.height = this.size.height;
        this.viewport.style.width = this.size.width;
        this.viewport.style.position = this.position;
        this.viewport.style.overflow = "hidden";
        this.viewport.style.zIndex = "-10000";

        // this.viewport.onmouseover = function() { alert("Hover!"); }
        // this.viewport.onmouseover = () =>  this.mouseOver();
    }

    // mouseOver()
    // {
        
    // }
    
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

    addEntity({ name, transform, type, backgroundColor } = {})
    {
        this.scene.entitites.push(new Entity({ name, transform, type, backgroundColor, scene: this.scene }));
    }
}

export { Game };
