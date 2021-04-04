import anchorPosition from './../enums/anchorPosition.js'

/**
 * @class Transform
 * A transform, to move, scale, rotate and generally position an entity.
 */
class Transform
{
    constructor({ position, scale, size } = {})
    {
        this.position = position || { x: 0, y: 0 };
        this.scale = scale || { x: 1, y: 1 };
        this.size = size || { x: 100, y: 100 };
        this.rotation = 0;
        this.anchor = { horizontal: {}, vertical: {} }
        this.collision = null;

        this.setAnchor(anchorPosition.TOPLEFT);
        
        /**
         * @todo Add local position and scale functionality
         * @description The local position and scale could be recieved by substracting the current values with the current browser width/height. (i.e.: 100% = 1024px, 50% = 512px)
         */
        // this.localPosition;
        // this.localScale;
    }

    /**
     * @method setPosition();
     * @description sets the horizontal and vertical position of the element.
     * @param { number } x - the horizontal position of the element
     * @param { number } y - the vertical position of the element.
     */
    setPosition = (x, y) => 
    {
        this.position.x = x;
        this.position.y = y;
    }

    /**
     * @method setPositionX();
     * @description sets the horizontal position of the element.
     * @param { number } x - the horizontal position in pixel
     */
    setPositionX = (x) => 
    {
        this.position.x = x;
    }

    /**
     * @method setPositionY();
     * @description sets the vertical position of the element.
     * @param { number } y - the vertical position in pixel
     */
    setPositionY = (y) =>
    {
        this.position.y = y;
    }

    /**
     * @method setScale();
     * @description sets the horizontal and vertical scale of the element.
     * @param { number } x - horizontal amount of scaling in pixel
     * @param { number } y - vertical amount of scaling in pixel
     */
    setScale = (x, y) =>
    {
        this.scale.x = x;
        this.scale.y = y;
    }

    /**
     * @method setScaleX();
     * @description sets the horizontal scale of the element.
     * @param { number } x - horizontal amount of scaling in pixel
     */
    setScaleX = (x) =>
    {
        this.scale.x = x;
    }

    /**
     * @method setScaleY();
     * @description sets the vertical scale of the element.
     * @param { number } y - vertical amount of scaling in pixel
     */
    setScaleY = (y) =>
    {
        this.scale.y = y;
    }

    /**
     * @method setSize();
     * @description sets the horizontal and vertical size of the element.
     * @param { number } x - horizontal amount of size in pixel
     * @param { number } y - vertical amount of size in pixel
     */
    setSize = (x, y) =>
    {
        this.size.x = x;
        this.size.y = y;
    }
 
     /**
      * @method setSizeX();
      * @description sets the horizontal size of the element.
      * @param { number } x - horizontal size in pixel
      */
    setSizeX = (x) =>
    {
        this.size.x = x;
    }

     /**
      * @method setSizeY();
      * @description sets the vertical size of the element.
      * @param { number } y - vertical size in pixel
      */
    setSizeY = (y) =>
    {
        this.size.y = y;
    }

    /**
     * @method setRotation();
     * @description sets the rotation of the element.
     * @param { number } deg - degree of rotation in numbers
     */
    setRotation = (deg) =>
    {
        this.rotation = deg;
    }

    /**
     * @method setAnchor();
     * @description sets the position of the anchor (left/top, left/bottom, right/top, right/bottom, center/top, center/bottomx, left/center, right/center, center/center (center?)).
     * @param { string } pos - the position of the anchor
     * @example 
     * transform.setAnchor("top right");
     * // if the string contains a single value, the horizontal position will be set to left.
     */ 
    setAnchor = (pos) =>
    {
        const newPosition = pos.split(" ");

        this.anchor.vertical = { top: false, center: false, bottom: false };
        this.anchor.horizontal = { left: false, center: false, right: false };

        this.anchor.vertical[newPosition[0]] = true;
        
        if(newPosition[1] !== undefined)
        {
            this.anchor.horizontal[newPosition[1]] = true;
        }
        else
        {
            this.anchor.horizontal.left = true;
        }

        return this.anchor;
    }
}

export { Transform };
