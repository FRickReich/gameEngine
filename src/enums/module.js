import { SaveGame } from '../modules/savegame.js';
import { Input } from '../modules/input.js';
import { EventEmitter } from '../modules/eventEmitter.js';

const module = {
    'SaveGame': SaveGame,
    'Input': Input,
    'EventEmitter': EventEmitter
};

export default module;
