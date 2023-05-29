JavaScript function names can be quite helpful for debugging and logging, but how does JavaScript determine what a function's name *is*?

## JavaScript functions have a `name` property

The first thing to note, since it's not at all obvious, is that JavaScript functions are special kinds of *objects* with a few default properties:

```js
function myFunction(){};
console.log(Object.getOwnPropertyNames(myFunction));
// [ 'length', 'name', 'prototype' ]
```

One of those properties is the `name` field. That's where your function's name is stored.

## Function names are *readonly*

If we take a named function and look at its `name` property descriptor, we see that it is readonly:

```js
function myFunction(){};
console.log(Object.getOwnPropertyDescriptor(myFunction, 'name'));
// {
//   value: 'myFunction',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }
myFunction.name = 'anotherName'; // TypeError: Cannot assign to read only property 'name' of function 'function myFunction(){}
```

Notice that the `name` property is *configurable* by default. So while we can't directly re-assign the name using an assignment operation, we can still use [`Object.defineProperty`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) to rename a function:

```js
function myFunction(){};
Object.defineProperty(myFunction, 'name', {writable: true, value: 'myRenamedFunction'});
console.log(myFunction.name); // myRenamedFunction
```

## JavaScript *wants* to name your functions

You can explicitly name a function by using the `function myFunctionName(){}` syntax. But when you don't use that syntax, e.g. with arrow functions or with "anonymous" `function(){}` declarations, JavaScript will still try to find a name to give to your function.

If you've declared your function on the right-hand-side of an assignment, the name of the variable on the left is used as the name:

```js
const myFunction = function(){};
console.log(myFunction.name); // myFunction

const myArrowFunction = () => {};
console.log(myArrowFunction.name); // myArrowFunction

const myObject = {
  myMethod: function(){},
  myArrowMethod: () => {}
};
console.log(myObject.myMethod.name); // myMethod
console.log(myObject.myArrowMethod.name); // myArrowMethod
```

## Do "anonymous" JavaScript functions even exist?

No, not really. If you create an "anonymous" function that also isn't directly assigned to a named variable, you can get an "anonymous" function:

```js
const anonymousFunctionGenerator = ()=>()=>{};
const myAnonymousFunction = anonymousFunctionGenerator();
console.log(myAnonymousFunction); // [Function (anonymous)]
```

BUT! The function *does still have a name*, it's just a sneaky one: an empty string!

```js
const anonymousFunctionGenerator = ()=>()=>{};
const myAnonymousFunction = anonymousFunctionGenerator();
console.log(Object.getOwnPropertyDescriptor(myAnonymousFunction, 'name'));
// { value: '', writable: false, enumerable: false, configurable: true }
```
