const getModuleName = (configFile, module) =>
{
    return configFile.modules.find(m => m.name === module.constructor.name).config || undefined;
}

export { getModuleName };
