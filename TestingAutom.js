
//this type of function declaration do note require function call in js it is automatically called

(function()
{
  console.log('hello');
})();

function myFunction()
{
  console.log('calling function using funtion call');
}

//Function using inner scope

myFunction();

function myFunc()
{
  console.log('function call using inner scope');
}

(function()
{
  myFunc();
})();
/////         //////////////////////////

// assignning funciton as a variable.

var myFun = function()
{
  console.log('using funciton as a vairable');
};

var myFun2 = myFun;
myFun();
myFun2();
console.log(function(){
  console.log('hello');
});
//   using classes is js //

var myClass = function()
{
  var name = 'Dinesh';
  var num = 10;
  var last = 'Gunda';
};
myClass.num = 10;
myClass.last = 'Dinesh';
console.log(myClass.last);
