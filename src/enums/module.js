import { SaveGame } from        '../modules/SaveGame/savegame.js';
import { Input } from           '../modules/Input/input.js';
import { EventEmitter } from    '../modules/EventEmitter/eventEmitter.js';
import { UIManager } from       '../modules/UIManager/uiManager.js';

const module = {
    'SaveGame': SaveGame,
    'Input': Input,
    'EventEmitter': EventEmitter,
    'UIManager': UIManager,
};

export default module;
