

// 1. Whenever any JavaScript code is executed an execution context is created and it is the Global Execution Context.
// 2. An Execution Context is basically a box which has two components called Memory Component(Variable Environment) and Code Component(Thread Of Execution).
// 3. The Execution context is created in two phases
//    a. Memory Creation Phase : In this Phase, Memory is allocated to all the variables and functions which are present in the           global scope. Special keyword Undefined in case of variables and literally the whole function in case of functions.
//    b. Code Execution Phase : In this Phase, code is executed line by line.

// 4. Whenever there is a function invocation an all new execution context is created and same process is followed again.
// 5. If there is any function parameter then it is also allocated memory while creating the execution context of the function.
// 6. Whenever return keyword is encountered , it means the task of function is over and it returns back the control of the program back to the place where it was invoked. and with this this execution context is deleted from stack.


// 7. Call Stack is basically a stack which maintains the order of execution of execution context. Whenever a code is executed the Global Execution Context is pushed into the stack first and later on as per the function invocation the  execution context is pushed into the stack. When the function code is done executing the execution context is popped out and last the Global Execution Context s also deleted.



getName();
console.log(x);
getName1();

var  x= 18;

function getName(){
    console.log("hello this is radhika")
}


var getName1 = function() {
    console.log("hello this is radhika")
} //  it will give error  getName1 is not a fucntion . because it behaves just like another variable
var getName1 = () => {
    console.log("hello this is radhika")
} //  it will give error  getName1 is not a fucntion . because it behaves just like another variable



// 1. In JS, if we will try to access variables and functions before their declaration then we will not get any error but inanother language we wil get error that is hoisting. 
// in variables we can get undefined .
// 2. Arrow functions enact as variables and get "undefined" during the memory creation phase while functions actually get run.
// 3. Hoisting: Mechanism in JS where the variable declarations are moved to the top of the scope before execution. Therefore it is possible to call a function before initializing it.
// 4. Whenever a JS program is run, a global execution block is created, which comprises of 2: Memory creation and Code execution.
// 5. Variable declarations are scanned and are made undefined
// 6. Function declarations are scanned and are made available