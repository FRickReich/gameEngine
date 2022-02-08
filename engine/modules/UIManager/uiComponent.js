import { camelCaseString } from './../../utils/camelCaseString.js';

class UIComponent
{
    /**
     * @constructor
     * @param { object } config
     * @param { object } scene
     */
    constructor({ layer } = {})
    {
        this.type = "DIV";
        this.layer = layer || undefined;
        this.element;
    }

    /**
     * @method create();
     * @description Creates a new DOM element for the component.
     * @returns { boolean }
     */
    create = () =>
    {
        this.element = document.createElement(this.type);
        this.element.classList.add(camelCaseString(this.constructor.name));

        return true;
    }
}

export default UIComponent;

/*
constructor()
    {
        this.parent;
        this.element;
        this.layer = 10000;
        this.layout = {};
        this.type = "DIV";
        create();
    }
    create = (type) =>
    {
        const element = document.createElement(type);
    }
    layout = () =>
    {
        
    }
    show = () => {}
    
    // setLayout = (layout) =>
    // {
    //     this.layout = layout;
    // }
    // setlayer = (layer) =>
    // {
    //     this.layer = layer;
    // }
    // getlayer = () =>
    // {
    //     return this.layer;
    // }
    // getLayout = () =>
    // {
    //     return this.layout;
    // }
    */