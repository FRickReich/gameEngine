import { Entity } from './../entity.js';

class BlockEntity extends Entity
{
    constructor({ name, transform, type, backgroundColor } = {})
    {
        super({ name, transform, type });

        this.backgroundColor = backgroundColor || "#00FF00";
    }

    render = () => 
    {
        this.renderDefaults();
        this.entity.style.backgroundColor = this.backgroundColor;
    }

    setBackgroundColor = (backgroundColor) =>
    {
        this.backgroundColor = `${ backgroundColor }`;
    }
}

export { BlockEntity };
