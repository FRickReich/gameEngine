const keyEvents = {
    KEYUP: "KeyUp",
    KEYDOWN: "KeyDown",
    KEYPRESSED: "KeyPressed"
};

const keys = {}

function inputManager()
{
    window.addEventListener(
        "keydown",
        function(event)
        {
            handleKey(event.key, keyEvents.KEYDOWN);

            console.log(keys);
        }
    );

    window.addEventListener(
        "keyup",
        function(event)
        {
            handleKey(event.key, keyEvents.KEYUP);
            removeKey(event.key);
            
            console.log(keys);
        }
    );

    window.addEventListener(
        "keypress",
        function(event)
        {
            handleKey(event.key, keyEvents.KEYPRESSED);

            console.log(keys);
        }
    );
}

function handleKey(key, state)
{
    if(key === " ")
    {
        key = "space";
    }

    keys[key.toLowerCase()] = state;
}

function removeKey(key)
{
    delete keys[key.toLowerCase()];
}

inputManager();

