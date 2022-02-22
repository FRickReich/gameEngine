import { createGameScreen } from './utils/createGameScreen.js';

const engine = (configFile) => 
{
    let oldFrame;
    let interval = 1000/60;
    let inLoop;

    const game = {
        config: undefined,
        modules: {},
        time:
        {
            timestamp: 0,
            deltatime: 0,
        },
        system:
        {
            frame: 0,
            isRunning: true
        },
        screen:
        {

        }
    }

    const isRunning = game.system.isRunning;
    
    const setConfig = (value) => game.config = value;
    const setIsRunning = (value) => game.system.isRunning = value;
    const setFrame = (value) => game.system.frame = value;

    // Setup the initial game
    const create = (configFile) =>
    {
        setConfig(configFile);

        createGameScreen(configFile);
    };

    // Run tasks before game start
    const awake = (fn) =>
    {
        fn && fn(game);
    }

    // run tasks at game start
    const start = (fn) =>
    {
        try
        {
            fn && fn(game);

            setFrame(requestAnimationFrame(loop));
            
            setIsRunning(true);

        }
        catch(err)
        {
            console.log(err);
        }
    };

    // internal function for game loop
    const loop = (ts) =>
    {
        if(isRunning)
        {
            game.time.timestamp = ts;

            if(!oldFrame)
            {
                oldFrame = game.time.timestamp;
            }
    
            setFrame(requestAnimationFrame(loop));
            
            game.time.deltatime = game.time.timestamp - oldFrame;
    
            if(game.time.deltatime > interval)
            {
                oldFrame = game.time.timestamp - (game.time.deltatime % interval);

                try
                {
                    inLoop && inLoop(game);
                }
                catch (err)
                {
                    console.log(err);
                }
            }
        }
    }

    // run tasks at game time
    const update = (fn) =>
    {
        if(fn)
        {
            inLoop = fn;
        }
    }

    // run tasks at game interruption
    // TODO: Get this to work again...
    const stop = (fn) =>
    {
        setIsRunning(false);

        if(fn)
        {
            fn(game);
        }
    }

    if(typeof configFile === "object")
    {
        create(configFile);
    }

    return {
        create: create,
        awake: awake,
        start: start,
        update: update,
        stop: stop
    }
}

export default engine;
