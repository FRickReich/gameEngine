/**
 * @class Game
 * @description The main Game class
 */
class Game
{
    /**
     * @constructor
     * @param { object } options 
     */
    constructor({ target, size, position, background } = {})
    {
        this.target = target || "#game";
        this.parent = document.querySelector(this.target);
        this.size = size || { width: "100vw", height: "100vh" }
        this.position = position || "absolute";
        this.background = background || "#708090";

        this.initialize();
    }

    /**
     * @method resetBody();
     * @description resets the used document bodys padding and margin, returns boolean to confirm the operation.
     * @returns { boolean }
     */
    resetBody()
    {
        const body = document.querySelector("body");
        body.style.padding = "0";
        body.style.margin = "0";

        return true;
    }

    /**
     * @method initialize();
     * @description basic initialization of game parameters, returns boolean to confirm the operation.
     * @returns { boolean }
     */
    initialize()
    {
        /**
         * @todo Create an assortment of methods to initialize the different parts of the core game.
         */
        
        /**
         * @todo Make the default sizes match css parameters, given from the outside.
         */
        this.parent.style.background = this.background;
        this.parent.style.height = this.size.height;
        this.parent.style.width = this.size.width;
        this.parent.style.position = this.position;
        this.parent.style.overflow = "hidden";
        this.parent.style.zIndex = "-10000";

        return true;
    }
}

export { Game };
