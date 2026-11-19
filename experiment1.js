
const EventEmitter = require('events');

// Create event object
const event = new EventEmitter();

// 1. on() - Register event listener
event.on("click", () => {
    console.log("Button clicked!");
});

// 2. emit() - Trigger event
event.emit("click");

// 3. once() - Execute event only once
event.once("login", (name) => {
    console.log(name + " logged in successfully");
});

event.emit("login", "Kartik");
event.emit("login", "Rahul");

// 4. Passing data with events
event.on("message", (name) => {
    console.log("Hello " + name);
});

event.emit("message", "Kartik");

// 5. off() - Remove event listener
const greet = () => {
    console.log("Hello World");
};

event.on("greet", greet);
event.emit("greet");

event.off("greet", greet);
event.emit("greet");

// 6. Remove all listeners
event.removeAllListeners("click");

console.log("Program Ended");
