//what is a callback function in js, passing a function inside another function is known as callback function  is passed and sometimes it is
//stored and called back after sometime so name callback, best example is setTimeOut

setTimeout(function (){console.log("timer finished")}, 3000);

function x (y){
    console.log(y);
}

x(function y(){})