import { Transform } from "./transform.js";
import { Collider } from './collider.js';
import { slugifyString } from './utils/slugifyString.js';
import { createUUID } from './utils/createUUID.js';

/**
 * @class Entity
 * An entity, for creating elements visible in the game view.
 */
class Entity
{
    constructor({ name, id, transform, collider, type, backgroundColor, scene } = {})
    {
        this.name = name || "New Entity";
        this.id = id || createUUID();
        this.transform = transform || new Transform();
        this.type = type || "span";
        this.backgroundColor = backgroundColor || "#ECECEC";
        this.scene = scene;
        this.modules = {};
        this.isColliding = false;
        
        this.create();

        this.collider = collider || new Collider({ parent: this });
    }

    create = () => 
    {
        this.entity = document.createElement(this.type);
        this.entity.id = slugifyString(this.name) + "___" + this.id;
        this.entity.classList.add("entity");
        this.scene.append(this.entity);
    }

    render = () =>
    {
        this.entity.style.position = "absolute";
        this.entity.style.left = this.transform.position.x + "px";
        this.entity.style.top = this.transform.position.y + "px";
        this.entity.style.height = this.transform.size.x + "px";
        this.entity.style.width = this.transform.size.y + "px";
        this.entity.style.transform = `
            rotate(${ this.transform.rotation }deg)
            scaleY(${ this.transform.scale.x })
            scaleX(${ this.transform.scale.y })
        `
        this.entity.style.backgroundColor = this.backgroundColor;
        this.entity.style.display = "flex";
        this.entity.style.justifyContent = "center";
        this.entity.style.alignItems = "center";

        // display: flex;
// justify-content: center;
    }

    setBackgroundColor = (backgroundColor) =>
    {
        this.backgroundColor = `${ backgroundColor }`;
    }

    addModule(type)
    {
        switch (type) {
            case "Collider":
                // this.modules.collider = new Collider({ parent: this.entity });
                // this.entity.appendChild(this.modules.collider.collider);
                break;
        
            default:
                break;
        }
    }
}

export { Entity };
