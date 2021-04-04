import { SaveGame } from '../modules/SaveGame/savegame.js';
import { Input } from '../modules/Input/input.js';
import { EventEmitter } from '../modules/EventEmitter/eventEmitter.js';
import { UI } from '../modules/UI/ui.js';

const module = {
    'SaveGame': SaveGame,
    'Input': Input,
    'EventEmitter': EventEmitter,
    'UI': UI,
};

export default module;
