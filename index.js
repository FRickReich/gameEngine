import { Core } from './src/core.js';
import { Transform } from './src/transform.js';

const core = new Core();

// window.onload = core.init;

const testTransform = new Transform();
console.log(testTransform.anchor);

testTransform.setAnchor("center right");

console.log(testTransform.anchor);
