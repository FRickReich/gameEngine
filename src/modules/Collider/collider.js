class Collider
{
    constructor({ parent })
    {
        this.parent = parent || undefined;
        this.collider = undefined;

        this.create();
    }

    create()
    {
        this.collider = document.createElement("div");
        this.collider.classList.add("collider");
        this.collider.style.height = this.parent.transform.size.x - 10 + "px";
        this.collider.style.width = this.parent.transform.size.y - 10 + "px";
        this.collider.style.zIndex = 100000;
        this.parent.entity.append(this.collider);

        this.draw();
    }

    draw()
    {
        this.collider.style.background = this.parent.isColliding ? "rgba(255, 0, 0, 0.5)" : "rgba(0, 255, 0, 0.5)";
    }

    checkCollision()
    {
        
    }
}

export { Collider };
