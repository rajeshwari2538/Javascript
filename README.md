# Javascript

# Execution Context
    -> "Everything in JavaScript happens inside an Execution Context"
    Whenever we run js program Execution Context is created
    -> Two phases 
       - Memory Creation phase - js will allocate memory to all variables and    functions these are stored as key-value pair. when it allocates memory to variables it stores a special value undefined. in case of function it stores whole code of the function.
    
       - Code Execution phase - Here js code will be executed line by line in a specific order.

# Call Stack
    -> It maintains the order of execution of execution context.
    -> It works on the Last In, First Out (LIFO) principle.

# Hoisting
    -> Hoisting is a phenomena in javascript by which we can access variables and functions even before we have initialized it without getting any error.

    -> whenever we try to access variable before initialising it will give undefined because of execution context's memory creation phase.