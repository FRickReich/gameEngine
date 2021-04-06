import keyEvent from './keyEvent.js';

/**
 * @class Input
 */
class Input
{
    /**
     * @constructor
     */
    constructor()
    {
        this.keys = {};
        this.event = keyEvent;
        this.delay = 100;
    };

    /**
     * @method listen();
     * @description Listens to window events.
     */
    listen = () =>
    {
        const addKey = this.addKey.bind(this);
        const removeKey = this.removeKey.bind(this);
        const delay = this.delay;

        window.addEventListener(
            "keydown",
            function(event)
            {
                addKey(event.key, keyEvent.KEYDOWN);
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
                addKey(event.key, keyEvent.KEYUP, () =>
                {
                    setTimeout(function(){
                        removeKey(event.key);
                    }, delay);
                });
            }
        );

        window.addEventListener(
            "keypress",
            function(event)
            {
                addKey(event.key, keyEvent.KEYPRESSED);
            }
        );
    };

    /**
     * @method addKey();
     * @description Adds the key to the keys array.
     * @param { string } key The key that has triggered the event.
     * @param { string } state The state the key is in.
     * @returns { string }
     */
    addKey = (key, state, callback) =>
    {
        // Check if the space key has been pressed, and change its key to "space"
        if(key === " ")
        {
            key = "space";
        }

        this.keys[key.toLowerCase()] = state;

        callback && callback();

        return key;
    };

    /**
     * @method removeKey();
     * @description Removes the key from the keys array.
     * @param {*} key 
     * @returns { string }
     */
    removeKey = (key) =>
    {
        // Check if the space key has been pressed, and change its key to "space"
        if(key === " ")
        {
            key = "space";
        }

        delete this.keys[key.toLowerCase()];

        return key;
    };

    /**
     * @method keyState();
     * @description Returns the state of a given key.
     * @param { string } key The key to be checked.
     * @returns { string }
     */
    keyState = (key) => 
    {
        return this.keys[key];
    };
}

export { Input };