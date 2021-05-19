// a();
// console.log(b);
let num=10;

//function statement aka function declaration
function a(){
    var num=20;
    console.log(num);
    console.log("called a");
}
a();

(()=>console.log(num))();


//function expression
var b = function(){
    console.log("called b");
}

//named function expression
var c = function xyz(param1, param2){  //parameters ara labels which receivs values passed whie calling the function
    console.log("called c");
}
//differe between parameters and arfuemnts
c('arg1','arg2'); // values that are passed wgile calling the function are arguements

//first class function -> the ability of the functions to be used as values and cann be passed as a arguements inside
// a function and can be returned from the function aka firs class citizens