// Events are a core part of Node.js, enabling asynchronous interactions
//  by emitting and listening for events. Node.js provides an EventEmitter 
// class that you can use to create, emit, and listen for events.


const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Create event listeners
eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

eventEmitter.on('farewell', (name) => {
    console.log(`Goodbye, ${name}!`);
});

// Emit events
eventEmitter.emit('greet', 'Alice');
eventEmitter.emit('farewell', 'Bob');
