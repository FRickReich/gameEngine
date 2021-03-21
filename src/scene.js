
class Scene
{
    constructor()
    {
        this.entitites = [];
        this.element = null;

        this.create();
    }

    create()
    {
        this.element = document.createElement("div");
        this.element.classList.add("scene");
    }
    
    draw()
    {
        this.element.style.position = "absolute";
        this.element.style.top = 0;
        this.element.style.left = 0;
    }

    move({ x, y})
    {
        this.moveX(x);
        this.moveY(y);
    }
    
    moveX(x)
    {
        this.element.style.left = x;
    }
    
    moveY(y)
    {
        this.element.style.top = x;
    }

    offset()
    {
        return { x: this.element.style.left, y: this.element.style.top }
    }

    offsetX()
    {
        return parseInt(this.element.style.left);
    }

    offsetY()
    {
        return parseInt(this.element.style.top);
    }
}

export { Scene };
