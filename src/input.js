import keyEvents from './enums/keyEvents.js';

class Input
{
    constructor()
    {
        this.keys = {};
    }

    listen = () =>
    {
        const handleKey = this.handleKey.bind(this);
        const removeKey = this.removeKey.bind(this);

        window.addEventListener(
            "keydown",
            function(event)
            {
                handleKey(event.key, keyEvents.KEYDOWN);
            }
        );

        window.addEventListener(
            "keyup",
            function(event)
            {
                /**
                 * @todo Up-State does not clean itself after firing.
                 * @description If up is fired, it will stay, and not clean up after usage.
                 */
                handleKey(event.key, keyEvents.KEYUP);
                // removeKey(event.key);
            }
        );

        window.addEventListener(
            "keypress",
            function(event)
            {
                handleKey(event.key, keyEvents.KEYPRESSED);
            }
        );
    }

    handleKey = (key, state) =>
    {
        if(key === " ")
        {
            key = "space";
        }

        this.keys[key.toLowerCase()] = state;

        // this.removeKey(key);
    }

    removeKey = (key) =>
    {
        if(key === " ")
        {
            key = "space";
        }

        delete this.keys[key.toLowerCase()];
    }

    keyState = (key) => 
    {
        return this.keys[key];
    }
}

export { Input };