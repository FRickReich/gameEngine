class EventEmitter
{
    constructor()
    {
        this.events = {};
    }

    on(name, listener)
    {
        if (!this.events[name]) {
            this.events[name] = [];
          }

          this.events[name].push(listener);
    }

    removeListener(name, selectedListener)
    {
        if (!this.events[name])
        {
            throw new Error(`Event "${ name }" doesn't exits.`);
        }
      
        const filterListeners = (listener) => listener !== selectedListener;
      
        this.events[name] = this.events[name].filter(filterListeners);
    }

    fire(name, data) {
        if (!this.events[name])
        {
            throw new Error(`Event "${ name }" doesn't exits.`);
        }
    
        const fireCallbacks = (callback) =>
        {
            callback(data);
        };
    
        this.events[name].forEach(fireCallbacks);
      }
}

export { EventEmitter };
