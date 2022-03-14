const person = {
	name: 'Lorenzo',
	walk() {},
	talk() {},
};

// If you know ahead of time what you are going to access:
console.log(person.walk);
// If you don't
let attribute = 'name';
console.log(person[attribute]);
