

class Layer
{
    constructor({ number, config, isVisible, isShowing } = {})
    {
        this.element;
        this.number = number || 1;
        this.config = config || undefined;
        this.visible = isVisible || true;
        this.isShowing = isShowing || false;
        this.components = [];

        this.create();

        this.showLayer(this.isShowing);
    }

    create = () =>
    {
        const parent = document.querySelector(this.config.root)
        const newLayer = document.createElement("DIV");
        
        newLayer.classList.add("layer");
        
        this.element = newLayer;
        this.layerNumber = this.number;
        
        this.initStyles();
        
        parent.prepend(newLayer);
    }
    
    initStyles = () =>
    {
        this.element.style.position = "absolute";
        this.element.style.width = "100%";
        this.element.style.height = "100%";
    }
    
    setVisibility = (state) =>
    {
        if(state)
        {
            this.style.display = "block";
        }
        else
        {
            this.style.display = "none";
        }
        
        this.visible = state;
    }

    showLayer = (state) =>
    {
        this.element.style.backgroundColor = state ? `rgba(0, 0, 0, 0.25)` : "transparent";
        this.element.style.outline = state ? `1px solid rgba(0, 0, 0, 0.5)` : "none";

        this.isShowing = state;
    }

    addComponent = (component) =>
    {
        const newComponent = component;
        newComponent.layer = this;
        newComponent.create();

        this.components.push(newComponent);

        this.element.appendChild(newComponent.element);

        console.log(newComponent)

        // const newComponent = document.createElement("DIV");
        // newComponent.classList.add("component");

        // this.components.push(newComponent);

        // this.element.appendChild(newComponent)

        // return component;
    }
    
    set layerNumber(num)
    {
        this.number = num;
        this.element.style.zIndex = 10000 + parseInt(num);
        this.element.id = "layer___" + num;
    }
    
    get layerNumber()
    {
        return this.element.style.zIndex;
    }

    set isVisible(state)
    {
        this.visible = state;
        
        this.setVisibility(state)
    }

    get isVisible()
    {
        return this.visible;
    }
};

export default Layer;
