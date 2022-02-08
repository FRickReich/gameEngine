import { getModuleName } from './../utils/getModuleName.js'

export default class modules
{
    constructor({ config })
    {
        this.config = getModuleName(config, this);
        this.root = document.querySelector(config.defaults.root);
        this.domElement = "DIV";
        this.container;

        this.create();
    }

    /**
     * @method create();
     * @description Creates a new DOM element for the module.
     * @returns { boolean }
     */
    create = () =>
    {
        const modulesContainer = this.root.querySelector('#modules');
        const moduleContainer = document.createElement(this.domElement);
        
        moduleContainer.style.position = "absolute";
        moduleContainer.classList.add("module");
        moduleContainer.id = this.constructor.name;

        this.container = moduleContainer;
        modulesContainer.appendChild(this.container);

        return true;
    }

    /**
     * @method changeStyle();
     * @description Changes the style of the modules DOM element.
     * @param { object } style 
     */
    changeStyle = (style) =>
    {
        Object.assign(this.container.style, style);

        return this.container.style;
    }
}
