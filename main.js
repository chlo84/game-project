// RAM = Random Access Memory = variables
// CPU = Central Processing Unit = logic execution


// FPS = 

const debug = document.querySelector('.debug');
debug.innerText = 'hello world';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
context.fillStyle = 'red';
context.fillRect(50, 50, 100, 100);