'use strict';
// if this is called within a method of an object,
// this will point towards the given object
// otherwise, if the function is called as a standalone object,
// then this will point tot he gloabl object (the window object)
// or undefined in case we're using the strict mode
// With callback functions, it will return the window object nonetheless
const person = {
	name: 'Lorenzo',
	who() {
		console.log(this);
	},
};

person.who(); // Object

// Just reference the function
const who = person.who;
who(); // Undefined

// This gets bind to the object passed in the function
const whoAgain = person.who.bind(person);

whoAgain(); // Object
