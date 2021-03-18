class Transform
{
    constructor()
    {
        this.position = { x: 0, y: 0 };
        this.scale = { x: 0, y: 0 };
        this.rotation = 0;
        this.anchor = [
            
            [ true, false, false ], // left, center, right
            [ true, false, false ]  // top, center, bottom
        ]
        
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

        this.anchor[0].fill(false);
        this.anchor[1].fill(false);

        if(newPosition[0] === "top")
        {
            this.anchor[0][0] = true;
        }
        else if(newPosition[0] === "center")
        {
            this.anchor[0][1] = true;
        }
        else if(newPosition[0] === "bottom")
        {
            this.anchor[0][2] = true;
        }

        if(newPosition[1] !== undefined)
        {
            if(newPosition[1] === "left")
            {
                this.anchor[1][0] = true;
            }
            else if(newPosition[1] === "center")
            {
                this.anchor[1][1] = true;
            }
            else if(newPosition[1] === "right")
            {
                this.anchor[1][2] = true;
            }
        }
        else
        {
            this.anchor[1][0] = true;
        }
    }
}

export { Transform };
