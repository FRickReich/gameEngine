
class SaveGame
{
    constructor({ type, name } = {})
    {
        this.type = type || "LocalStorage";
        this.name = name || "Default Game";
        
        this.currentGame;
    }

    save(callback)
    {
        if(this.type === "LocalStorage")
        {
            localStorage.setItem("key", "newValue")
            return true;
        }
    }

    load()
    {
        if(this.type === "LocalStorage")
        {
            this.currentGame = localStorage.getItem('key');
            return true;
        }
    }

    delete()
    {
        if(this.type === "LocalStorage")
        {
            localStorage.removeItem('key');
            return true;
        }
    }

    reset()
    {
        if(this.type === "LocalStorage")
        {
            localStorage.clear();
            return true;
        }
    }
}

export { SaveGame }
