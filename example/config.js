export default {
    game: 
    {
        name: "Default Game",
        version: "0.1.0",
        author: "",
    },
    defaults:
    {
        fps: 60,
        root: "#game"
    },
    modules:
    [
        {
            name: "Entity",
            config: {
                addTransform: true
            }
        },
        {
            name: "Scene",
            config: {
                "width": 1024,
                "height": 768,
                "fullsize": false
            }
        },
        {
            name: "Transform",
            config: {}
        },
        {
            name: "UI",
            config: {}
        }
    ]
}
