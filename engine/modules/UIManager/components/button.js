import UIComponent from './../uiComponent.js';

class Button extends UIComponent
{
    constructor({ config } = {})
    {
        super({ config });

        this.type = "BUTTON";
    }
}

export { Button }
