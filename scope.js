// 1.Undefined is a Special Placeholder which is used to reserve memory for the variables in the memory creation phase. Even before a single line of code is executed JS engine assigns undefined to the variables.

// 2.Not Defined means if we try to console or access any variable which is not declared in the code then we get Not Defined error.

// 3. JS is a loosely typed language or weakly typed language means it does not attaches its variables to specific data types like in C++ and java.

// 4.Remember undefined !== not defined.


// For revision
// Scope: where you can access the  specific variable or function in our function in our code

// Lexical environment : the Local memory(Created and goes hand-in-hand with 1st phase of corresponding execution context ) along with Lexical environment with the parent! and every time the lexical environment of the corresponding context is used, it references to its parent Lexical environment

// for simply understanding, I will try it as 'an onion example'
// see when one layer of onion(a variable) covers the layer inside it, it also covers the inner layers inside that layer and a point on our first layer of onion encloses inner layers our inner layer(variable and function inside the layer) gets covered by our first layer(can access the variable on the context) and the second layer(under first layer) encloses the third layer(innermost layer)still covered by 1st layer(can access the variable on layer)

// the Clojure concept starts here




function a() {
 console.log(b)
 function c() {
    console.log(b)
 }
}
var b = 10 ;
a();