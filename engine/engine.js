import module from './enums/module.js';
import { Scene } from './modules/Scene/scene.js';

/**
 * @todo recreate engine class more OOP
 */
/**
 * @class Engine
 * Main engine class for setting up the game and loop.
 */
class Engine
{ 
    /**
     * @constructor
     */
    constructor({ config } = {})
    {
        this.configFile = config || undefined;
        this.fps = this.configFile.defaults.fps;
        this.timestamp;
        this.frame = 0;
        this.oldFrame;
        this.interval = 1000/this.fps;
        this.deltaTime;
        this.modules = {};
        this.scene = undefined;

        this.setup();
    }

    setup = ({ root, size, position, background } = {}) =>
    {
        this.root = root || this.configFile.defaults.root;

        this.viewport = document.querySelector(this.root);
        this.size = size || { width: "100vw", height: "100vh" }

        // this.position = position || "absolute";
        
        this.background = background || "#708090";

        this.scene = new Scene();
        this.scene.draw();
        
        const moduleContainer = document.createElement("DIV");
        moduleContainer.id = "modules";
        // moduleContainer.style.position = "absolute";

        this.viewport.appendChild(moduleContainer);

        this.viewport.appendChild(this.scene.element);

        const body = document.querySelector("body");
        body.style.padding = "0";
        body.style.margin = "0";

        // container.style.backgroundColor = "red";
        // container.style.display = "flex";
        // container.style.justifyContent = "center";
        // container.style.alignItems = "center";
        // container.style.width = "200px";
        // container.style.height = "200px";

        // this.viewport.style.height = this.size.height;
        // this.viewport.style.width = this.size.width;
        // this.viewport.style.position = this.position;
        
        this.viewport.style.background = this.background;
        this.viewport.style.display = "flex";
        this.viewport.style.width = this.size.width;
        this.viewport.style.height = this.size.height;
        this.viewport.style.zIndex = "-10000";
        this.viewport.style.overflow = "hidden";
        

        document.title = this.configFile.game.title + " - v" + this.configFile.game.version;

        // this.viewport.onmouseover = function() { alert("Hover!"); }
        // this.viewport.onmouseover = () =>  this.mouseOver();
    }

    // mouseOver()
    // {
        
    // }
    
    /**
     * @method start
     * @param { function } callback
     * @callback state returns a boolean depending on the success of the operation
     */
    start = (callback) =>
    {
        let state = false;

        try
        {
            this.init();

            state = true;

            this.frame = requestAnimationFrame(this.gameLoop.bind(this));
        }
        catch (error)
        {
            console.log("ERROR: No .init(); method found in '" + this.constructor.name + "' class.");
        }

        callback && callback(state);
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
            this.modules[name] = new module[name]({ name: this.constructor.name, config: this.configFile });
        }
        catch (error)
        {
            console.log(error);
            console.log("ERROR: Could not find a module called " + name);
        }
    }
}

export default Engine;