var extend = typeof module !== 'undefined'
	? require('../index.js')
	: this.extend;

//----------------------------------------------
// shallow extend

//common array extend
var obj = [1, 2];
var data = extend([], obj);
obj[0]++;
console.log(data[0] !== obj[0]);
console.log(obj[0] === 2);
console.log(data[0] === 1);

// common object extend
var obj = {x : 1, y : 1};
var data = extend({}, obj);
obj.x++;
console.log(data.x !== obj.x);
console.log(obj.x === 2);
console.log(data.x === 1);

//----------------------------------------------
// deep extend

// extend Array
var obj = [[1]];
var data = extend(true, [], obj);
obj[0][0]++;
console.log(data[0][0] !== obj[0][0]);
console.log(obj[0][0] === 2);
console.log(data[0][0] === 1);

// extend Object
var obj = { x : { y : 1 } };
var data = extend(true, {}, obj);
obj.x.y++;
console.log(data.x.y !== obj.x.y);
console.log(obj.x.y === 2);
console.log(data.x.y === 1);

//----------------------------------------------
// if frontend
if (this.window) {
	// if deep extend a dom object
	var div = document.createElement('div');
	var data = extend(true, {}, obj);
	console.log(data.nodeName === void 0);

	var data = extend(true, {}, window);
	console.log(data.window === void 0);
} else {
	// if deep extend a emulated DIV Object
	var obj = { nodeType: 1, nodeName : 'div' };
	var data = extend(true, {}, obj);
	console.log(data.nodeName === void 0);

	// if deep extend a emulated window object
	var obj = {};
	obj.window = obj;
	var data = extend(true, {}, obj);
	console.log(data.window === void 0);
}

// to be used as a puppet
var obj = {
	extend : extend
};

obj.extend({
	sthToSay : 'Nice to meet you !',
	say : function () {
		return this.sthToSay;
	}
});
console.log(obj.say() === 'Nice to meet you !');

// deep extend a array, and save the src value
var data = {
	desc : ['I am Peter']
};
data = extend(true, data, {
	desc : ['and Who are you ?']
});
console.log(data.desc[0] === 'I am Peter');
console.log(data.desc[1] === 'and Who are you ?');

// deep extend a obj, and save the src value
var data = {
	would : {
		you : 'mind if I know your QQ || email || other contacts'
	}
};
data = extend(true, data, {
	would : {
		youMindIf : 'leave me a contact of you, would\'nt you ?'
	}
});
console.log(data.would.you === 'mind if I know your QQ || email || other contacts');
console.log(data.would.youMindIf === 'leave me a contact of you, would\'nt you ?');

console.log('the test is over, check the results through console');
console.log('make sure JS is running in ES5 mode');
console.log('if there is an false or error, please let me know');