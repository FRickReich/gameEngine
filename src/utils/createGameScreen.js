const createGameScreen = (config) => 
{
    const root = config.defaults.root || "#root";
    const viewport = document.querySelector(root);
    const size = { width: "100vw", height: "100vh" };
    const background = "#708090";

    document.title = `${ config.game.title || "Default Game" } v${ config.game.version || "0.1.0"}`;
    
    // draw scene
    
    const moduleContainer = document.createElement("DIV");
    moduleContainer.id = "modules";

    viewport.appendChild(moduleContainer);
    // viewport.appendChild(this.scene.element);

    const body = document.querySelector("body");
    body.style.padding = "0";
    body.style.margin = "0";
    
    viewport.style.background = background;
    viewport.style.display = "flex";
    viewport.style.width = size.width;
    viewport.style.height = size.height;
    viewport.style.zIndex = "-10000";
    viewport.style.overflow = "hidden";
}

export { createGameScreen };