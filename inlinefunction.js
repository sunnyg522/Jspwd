var myFunc = (function()

{
	console.log('hello');
} )();
console.log('printing the function using my function variable');

console.log(myFunc);
console.log(function(){
	console.log('hello');
});
