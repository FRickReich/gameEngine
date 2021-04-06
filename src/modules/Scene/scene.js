import { Entity } from './../Entity/entity.js';

/**
 * @todo Add documentation for scene and other classes
 */
/**
 * @class Scene
 * Main game scene setup and draw call.
 */
class Scene
{
    constructor()
    {
        this.entities = [];
        this.element = null;

        this.create();
    }

    create()
    {
        this.element = document.createElement("div");
        this.element.classList.add("scene");
    }
    
    draw()
    {
        // this.element.style.backgroundColor = "#FFFF00";
        this.element.style.width = "100%";
        this.element.style.height = "100%";


        // this.element.style.position = "absolute";
        // this.element.style.top = 0;
        // this.element.style.left = 0;

         // container.style.backgroundColor = "red";
        // container.style.display = "flex";
        // container.style.justifyContent = "center";
        // container.style.alignItems = "center";
        // container.style.width = "200px";
        // container.style.height = "200px";
    }

    addEntity = ({ name, transform, type, backgroundColor } = {}) =>
    {
        const newEntity = new Entity({ name, transform, type, backgroundColor, scene: this.element })
        this.entities.push(newEntity);
        return newEntity;
    }
    
    getEntityByName = (name) =>
    {
        // return this.entities.find(entity => entity.name === name);
        return this.entities.find(entity => entity.name === name);
    }

    getEntityById = (id) =>
    {
        return this.entities.find(entity => entity.id === id);
    }

    // GETTER
    /**
     * .offset;
     * @type { object }
     * @description returns an object with the current x and y offsets of the game scene in pixels.
     * @returns { object }
     */
    get offset()
    {
        return {
            x: parseFloat(this.element.style.left),
            y: parseFloat(this.element.style.top)
        }
    }

    /**
     * .offsetX;
     * @description returns a the number of the curent horizontal offset of the game scene in pixels.
     * @type { number }
     * @returns { number }
     */
    get offsetX()
    {
        return parseFloat(this.element.style.left);
    }

    /**
     * .offsetY;
     * @description returns a number with the current vertical offset of the game scene in pixels.
     * @type { number }
     */
    get offsetY()
    {
        return parseFloat(this.element.style.top);
    }

    // SETTER
    /**
     * .offset;
     * @description defines the x and y pixel offsets of the game scene by an object.
     * @type { number }
     */
    set offset({ x, y })
    {
        this.offsetX = x;
        this.offsetY = y;
    }

    /**
     * .offsetX;
     * @description defines the horizontal offset of the game scene by pixels.
     * @type { number }
     */
    set offsetX(x)
    {
        this.element.style.left = x;
    }

    /**
     * .offsetY;
     * @description defines the vertical offset of the game scene by pixels.
     * @type { number }
     */
    set offsetY(y)
    {
        this.element.style.top = y;
    }
}

export { Scene };
