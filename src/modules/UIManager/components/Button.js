import UIComponent from './../uiComponent.js';

class Button extends UIComponent
{
    constructor({ text } = {})
    {
        super();
        this.type = "BUTTON";
        this.elementText = text || undefined;
    }

    get text()
    {
        return this.elementText;
    }

    set text(text)
    {
        this.elementText = text; 
    }
}

export { Button }
