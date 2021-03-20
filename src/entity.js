import { Transform } from "./transform.js";
import { slugifyString } from './utils/slugifyString.js';
import { createUUID } from './utils/createUUID.js';

class Entity
{
    constructor({ name, transform, type } = {})
    {
        this.name = name || "New Entity";
        this.transform = transform || new Transform();
        this.type = type || "span";
        this.entity = null;
    }

    create = () => 
    {
        this.entity = document.createElement(this.type);
        this.entity.id = slugifyString(this.name) + "___" + createUUID();
        this.entity.classList.add("entity");
        document.body.prepend(this.entity);
    }

    renderDefaults = () =>
    {
        this.entity.style.position = "absolute";
        this.entity.style.left = this.transform.position.x + "px";
        this.entity.style.top = this.transform.position.y + "px";
        this.entity.style.height = this.transform.scale.x + "px";
        this.entity.style.width = this.transform.scale.y + "px";

    }
}

export { Entity };
