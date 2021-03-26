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

        // this.collider = document.createElement("div");
        this.collider = document.createElement("div");
        this.collider.classList.add("collider");
        this.collider.style.background = "rgba(255, 0, 0, 0.5)";
        this.collider.style.height = this.parent.transform.size.x - 10 + "px";
        this.collider.style.width = this.parent.transform.size.y - 10 + "px";
        this.collider.style.zIndex = 100000;
        this.parent.entity.append(this.collider);

        this.hide();
    }

    show()
    {
        this.collider.style.display = "block";
    }

    hide()
    {
        this.collider.style.display = "none";
    }
}

export { Collider };
