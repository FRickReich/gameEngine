import { Transform } from "./transform.js";
// import { Collider } from './collider.js';
import { slugifyString } from './utils/slugifyString.js';
import { createUUID } from './utils/createUUID.js';

class Entity
{
    constructor({ name, transform, type, backgroundColor, scene } = {})
    {
        this.name = name || "New Entity";
        this.transform = transform || new Transform();
        this.type = type || "span";
        this.backgroundColor = backgroundColor || "#00FF00";
        this.scene = scene;
        this.modules = {};

        this.create();
    }

    create = () => 
    {
        this.entity = document.createElement(this.type);
        this.entity.id = slugifyString(this.name) + "___" + createUUID();
        this.entity.classList.add("entity");
        this.scene.element.append(this.entity);
    }

    render = () =>
    {
        this.entity.style.position = "absolute";
        this.entity.style.left = this.transform.position.x + "px";
        this.entity.style.top = this.transform.position.y + "px";
        this.entity.style.height = this.transform.scale.x + "px";
        this.entity.style.width = this.transform.scale.y + "px";
        this.entity.style.backgroundColor = this.backgroundColor;
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
