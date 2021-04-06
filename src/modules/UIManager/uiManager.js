import Layer from './layer.js';
import Module from './../module.js';
import { Button } from './components/Button.js';

/**
 * @class UIManager
 * @extends Module
 * @description A UIManager module, for creating, sorting and managing layers and UI elements.
 */
class UIManager extends Module
{
    /**
     * @constructor
     * @param { object } config
     */
    constructor({ config } = {})
    {
        super({ config });

        this.changeStyle({
            width: "100%",
            height: "100%",
        });

        this.layers = [];

        this.createLayer(this.layerAmount);
        
        const newButton = new Button({ text: "Hallo"});

        this.layers[0].addComponent(newButton);
    };

    /**
     * @public
     * @method createLayer();
     * @description Creates a new layer and pushes it to the layers array.
     * @example
     * this.createLayer(this.layerAmount);
     * @param {*} layerNumber 
     */
    createLayer = (layerNumber) =>
    {
        const testLayer = new Layer({ number: layerNumber + 1, config: this.config, isShowing: true });

        this.layers.push(testLayer);
    };

    /**
     * @public
     * @method deleteLayer();
     * @description Physically deletes the layer and all its content from the DOM tree.
     * @example
     * this.deleteLayer(0);
     * @returns { Array } the updated layer list
     */
    deleteLayer = () =>
    {
        const layerElement = document.getElementById("layer___" + num);
        layerElement.remove();

        this.#reorganizeLayers(num);
        return this.layers;
    };

    /**
     * @private
     * @method reorganizeLayers();
     * @description Reorganizes layers by deleting the selected one from the layer array, and renumbering the remaining layers.
     * @returns { Array } the updated layer list
     */
    #reorganizeLayers = (num) =>
    {
        const newLayerList = this.layers.filter(layer => layer.number !== num);

        for (let i = 0; i < newLayerList.length; i++)
        {
            newLayerList[i].layerNumber = (i + 1);
        }
        
        this.layers = newLayerList;
        
        return this.layers;
    };
    
    /**
     * @public
     * @type { number }
     */
    get layerAmount()
    {
        return this.layers.length;
    };
};

export { UIManager };
