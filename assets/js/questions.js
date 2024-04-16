const data = {
  // Category 1
  "Variables and<br> Data Types": [
    {
      question: "What is the keyword used to declare variables in JavaScript?",
      answers: [
        "const",
        "var",
        "let",
        "all three"
      ],
      correctAnswer: "all three"
    },

    {
      question: "What is the difference between 'var' and 'let' in JavaScript?",
      answers: [
        "They are both used to declare global variables.",
        "'var' is global-scoped and 'let' is block-scoped",
        "'var' allows reassignment, 'let' is immutable.",
        "There is no difference; they are interchangeable."
      ],
      correctAnswer: "'var' is global-scoped and 'let' is block-scoped"
    },

    {
      question: "Which variable declaration keyword prevents reassignment of values?",
      answers: [
        "variables",
        "var",
        "let",
        "const"
      ],
      correctAnswer: "const"
    },

    {
      question: "What is the scope of a variable declared with 'let'?",
      answers: [
        "Global scope",
        "Function scope",
        "Block scope",
        "Local scope"
      ],
      correctAnswer: "Block scope"
    },

    {
      question: "Which of the following is NOT a valid JavaScript data type?",
      answers: [
        "Number",
        "String",
        "Boolean",
        "Integer"
      ],
      correctAnswer: "Integer"
    },

    {
      question: "What does NaN stand for in JavaScript?",
      answers: [
        "Not a Null",
        "No assigned Number",
        "Not a Number",
        "No available Number"
      ],
      correctAnswer: "Not a Number"
    },

    {
      question: "Which of the following is used to represent a value that is not yet assigned?",
      answers: [
        "undefined",
        "null",
        "void",
        "NaN"
      ],
      correctAnswer: "undefined"
    },

    {
      question: "What is the result of dividing a non-zero number by zero in JavaScript?",
      answers: [
        "Infinity",
        "NaN",
        "Error",
        "Undefined"
      ],
      correctAnswer: "Infinity"
    },

    {
      question: "Which type coercion operation is performed in JavaScript: '5' + 5?",
      answers: [
        "Implicit coercion to string",
        "Implicit coercion to number",
        "Explicit coercion to string",
        "Explicit coercion to number"
      ],
      correctAnswer: "Implicit coercion to string"
    },

    {
      question: "What is the result of the expression '5' == 5 in JavaScript?",
      answers: [
        "true",
        "false",
        "undefined",
        "NaN"
      ],
      correctAnswer: "true"
    },

    {
      question: "Which of the following is used to declare a constant variable in JavaScript?",
      answers: [
        "const",
        "let",
        "var",
        "final"
      ],
      correctAnswer: "const"
    },

    {
      question: "Which of the following is NOT a valid JavaScript string?",
      answers: [
        "Single quoted string",
        "Double quoted string",
        "Backtick quoted string",
        "Triple quoted string"
      ],
      correctAnswer: "Triple quoted string"
    },

    {
      question: "Which string method is used to determine the length of a string?",
      answers: [
        "length()",
        "size()",
        "count()",
        "charAt()"
      ],
      correctAnswer: "length()"
    },

    {
      question: "What is the result of the expression 'Hello' + 'World' in JavaScript?",
      answers: [
        "'HelloWorld'",
        "'Hello World'",
        "'Hello+World'",
        "'HelloWorld'"
      ],
      correctAnswer: "'HelloWorld'"
    },

    {
      question: "What are template literals used for in JavaScript?",
      answers: [
        "To define multiline strings",
        "To interpolate variables into strings",
        "To define regular expressions",
        "To concatenate strings"
      ],
      correctAnswer: "To interpolate variables into strings"
    },

    {
      question: "Which data type represents a non-numeric value?",
      answers: [
        "String",
        "Number",
        "Boolean",
        "Null"
      ],
      correctAnswer: "String"
    },

    {
      question: "What is the value of typeof undefined in JavaScript?",
      answers: [
        "null",
        "undefined",
        "string",
        "object"
      ],
      correctAnswer: "undefined"
    },

    {
      question: "What is the result of 1 + '1' in JavaScript?",
      answers: [
        "'11'",
        "2",
        "'2'",
        "11"
      ],
      correctAnswer: "'11'"
    },

    {
      question: "Which of the following represents an infinite value in JavaScript?",
      answers: [
        "Infinite",
        "Infinity",
        "Eternity",
        "Infini"
      ],
      correctAnswer: "Infinity"
    },

    {
      question: "What is the result of the expression Number('Hello') in JavaScript?",
      answers: [
        "Error",
        "NaN",
        "Infinity",
        "0"
      ],
      correctAnswer: "NaN"
    }
  ],
  // Category 2
  "Operators and<br> Control Flow": [

    {
      question: "Which keyword is used to define a function in JavaScript?",
      answers: [
        "function",
        "def",
        "fun",
        "method"
      ],
      correctAnswer: "function"
    },
    {
      question: "What is the result of 5 + 3 * 2?",
      answers: [
        "16",
        "11",
        "13",
        "10"
      ],
      correctAnswer: "11"
    },
    {
      question: "What is the result of the following code snippet: let x = 5; x += 3;?",
      answers: [
        "5",
        "8",
        "15",
        "3"
      ],
      correctAnswer: "8"
    },
    {
      question: "What is the purpose of the === operator in JavaScript?",
      answers: [
        "Assign a value",
        "Compare value and type",
        "Compare value only",
        "Execute a function"
      ],
      correctAnswer: "Compare value and type"
    },
    {
      question: "What will x be after executing: let x = 5; x++;?",
      answers: [
        "6",
        "5",
        "4",
        "7"
      ],
      correctAnswer: "6"
    },
    {
      question: "Which operator is used for 'or' in JavaScript?",
      answers: [
        "||",
        "&",
        "&&",
        "|"
      ],
      correctAnswer: "||"
    },
    {
      question: "What is the purpose of the if statement in JavaScript?",
      answers: [
        "Loop control",
        "Function declaration",
        "Conditional execution",
        "Variable declaration"
      ],
      correctAnswer: "Conditional execution"
    },
    {
      question: "In JavaScript, what is the syntax for a ternary operator?",
      answers: [
        "if { } else { }",
        "if ( ) { } else { }",
        "if ? :",
        "if : ?"
      ],
      correctAnswer: "if ? :"
    },
    {
      question: "What is the syntax for an if/else if/else statement in JavaScript?",
      answers: [
        "if { } elseif { } else { }",
        "if ( ) { } else if ( ) { } else { }",
        "if then else",
        "if - else if - else"
      ],
      correctAnswer: "if ( ) { } else if ( ) { } else { }"
    },
    {
      question: "Which keyword is used within a switch statement in JavaScript?",
      answers: [
        "event",
        "case",
        "argument",
        "instance"
      ],
      correctAnswer: "case"
    },
    {
      question: "What is the purpose of the break statement in JavaScript?",
      answers: [
        "Terminate a loop",
        "Skip to the next iteration",
        "Exit a function",
        "Resume the loop"
      ],
      correctAnswer: "Terminate a loop"
    },
    {
      question: "Which of the following statements accurately describes the behavior of a JavaScript for loop?",
      answers: [
        "To iterate over the properties of an object.",
        "To execute a block of code repeatedly while a specified condition is true.",
        "To execute a block of code a specific number of times.",
        "To break out of a loop when a certain condition is met."
      ],
      correctAnswer: "To execute a block of code a specific number of times."
    },
    {
      question: "What is the syntax for a while loop in JavaScript?",
      answers: [
        "while (condition) { }",
        "loop (condition) { }",
        "for (condition) { }",
        "for (condition; i++) { }"
      ],
      correctAnswer: "while (condition) { }"
    },
    {
      question: "What does the do...while loop do in JavaScript?",
      answers: [
        "Executes the code block at least once, then repeats while a condition is true",
        "Executes the code block repeatedly until a condition is false",
        "Executes the code block only if a condition is true",
        "Executes the code block once"
      ],
      correctAnswer: "Executes the code block at least once, then repeats while a condition is true"
    },
    {
      question: "What does the continue statement do in JavaScript?",
      answers: [
        "Ends the loop and jumps to the next iteration",
        "Skips the current iteration and jumps to the next",
        "Exits the loop",
        "Breaks the loop and jumps to the next iteration"
      ],
      correctAnswer: "Skips the current iteration and jumps to the next"
    },
    {
      question: "What is the purpose of nested for loops in JavaScript?",
      answers: [
        "Iterate over arrays",
        "Create multiple if statements",
        "Loop over objects",
        "Perform repeated actions within another loop"
      ],
      correctAnswer: "Perform repeated actions within another loop"
    },
    {
      question: "In JavaScript, which symbol is used for strict equality?",
      answers: [
        "=",
        "==",
        "===",
        "!="
      ],
      correctAnswer: "==="
    },
    {
      question: "What does the logical AND operator (&&) do in JavaScript?",
      answers: [
        "Returns true if both operands are true",
        "Returns true if either operand is true",
        "Returns true if both operands are false",
        "Returns false if either operand is false"
      ],
      correctAnswer: "Returns true if both operands are true"
    },
    {
      question: "What is the result of the expression 10 % 3 in JavaScript?",
      answers: [
        "1",
        "3",
        "0",
        "2"
      ],
      correctAnswer: "1"
    },
    {
      question: "What is the syntax for a switch statement in JavaScript?",
      answers: [
        "switch { case: break; }",
        "switch (expression) { case value: break; }",
        "switch (expression) { break; case value: }",
        "switch (expression) { value: case break; }"
      ],
      correctAnswer: "switch (expression) { case value: break; }"
    }
  ],
  // Category 3
  "Data Structures<br> and Functions": [
    {
      question: "What is the method used to add elements to the end of an array in JavaScript?",
      answers: [
        "add",
        "push",
        "insert",
        "append"
      ],
      correctAnswer: "push"
    },
    {
      question: "How do you access the third element of an array named 'arr'?",
      answers: [
        "arr[1]",
        "arr[2]",
        "arr[3]",
        "arr.third()"
      ],
      correctAnswer: "arr[2]"
    },
    {
      question: "Which method is used to remove the last element of an array in JavaScript?",
      answers: [
        "removeLast",
        "delete",
        "shift",
        "pop"
      ],
      correctAnswer: "pop"
    },
    {
      question: "What is the output of ['a', 'b', 'c'].length in JavaScript?",
      answers: [
        "4",
        "2",
        "3",
        "6"
      ],
      correctAnswer: "3"
    },
    {
      question: "In JavaScript, how do you define a new object?",
      answers: [
        "new Object()",
        "object()",
        "createObject()",
        "let obj = {}"
      ],
      correctAnswer: "let obj = {}"
    },
    {
      question: "What does the 'this' keyword refer to in JavaScript?",
      answers: [
        "The previous object",
        "The current object",
        "A global object",
        "An external object"
      ],
      correctAnswer: "The current object"
    },
    {
      question: "Which method is used to loop through the elements of an array in JavaScript?",
      answers: [
        "forIn",
        "iterate",
        "forEach",
        "loop"
      ],
      correctAnswer: "forEach"
    },
    {
      question: "What is the purpose of the 'return' statement in a JavaScript function?",
      answers: [
        "To specify the value returned by the function",
        "To terminate the function",
        "To print output to the console",
        "To declare a variable"
      ],
      correctAnswer: "To specify the value returned by the function"
    },
    {
      question: "Which keyword is used to declare a function in JavaScript?",
      answers: [
        "def",
        "fun",
        "method",
        "function"
      ],
      correctAnswer: "function"
    },
    {
      question: "How do you access a property named 'age' of an object named 'person'?",
      answers: [
        "person[age]",
        "person.age",
        "person.get('age')",
        "person.age()"
      ],
      correctAnswer: "person.age"
    },
    {
      question: "Which method is used to add one object's properties to another object in JavaScript?",
      answers: [
        "Object.assign()",
        "object.add()",
        "object.push()",
        "object.insert()"
      ],
      correctAnswer: "Object.assign()"
    },
    {
      question: "What is the result of Math.floor(4.7) in JavaScript?",
      answers: [
        "5",
        "4.7",
        "4",
        "Error"
      ],
      correctAnswer: "4"
    },
    {
      question: "How do you call a function named 'myFunction' in JavaScript?",
      answers: [
        "call myFunction()",
        "invoke myFunction()",
        "execute myFunction()",
        "myFunction()"
      ],
      correctAnswer: "myFunction()"
    },
    {
      question: "Which method is used to convert an array to a string in JavaScript?",
      answers: [
        "toString",
        "join",
        "concat",
        "splice"
      ],
      correctAnswer: "join"
    },
    {
      question: "What does the 'typeof' operator return when used with an array?",
      answers: [
        "'object'",
        "'array'",
        "'string'",
        "'undefined'"
      ],
      correctAnswer: "'object'"
    },
    {
      question: "What is the purpose of the 'arguments' object in JavaScript functions?",
      answers: [
        "To declare function arguments",
        "To access all arguments passed to the function",
        "To access local variables",
        "To return a value from the function"
      ],
      correctAnswer: "To access all arguments passed to the function"
    },
    {
      question: "Which method is used to remove the first element of an array in JavaScript?",
      answers: [
        "removeFirst",
        "delete",
        "pop",
        "shift"
      ],
      correctAnswer: "shift"
    },
    {
      question: "How do you access the value of a property named 'name' of an object named 'obj'?",
      answers: [
        "obj.getValue('name')",
        "obj.name",
        "obj['name']",
        "obj.name()"
      ],
      correctAnswer: "obj.name"
    },
    {
      question: "Which method is used to check if an object has a specific property in JavaScript?",
      answers: [
        "contains",
        "hasProperty",
        "checkProperty",
        "hasOwnProperty"
      ],
      correctAnswer: "hasOwnProperty"
    },
    {
      question: "What does the 'map' method do when used with an array in JavaScript?",
      answers: [
        "Returns the first element of the array",
        "Creates a new array with the results of calling a provided function on every element in the array",
        "Removes elements from the array",
        "Sorts the array"
      ],
      correctAnswer: "Creates a new array with the results of calling a provided function on every element in the array"
    }
  ],
  // Category 4
  "Manipulating<br> the DOM": [
    {
      question: "Which method is used to get an element by its ID in JavaScript?",
      answers: [
        "getElementsByClass",
        "querySelector",
        "getElementById",
        "getElementByTag"
      ],
      correctAnswer: "getElementById"
    },
    {
      question: "Which property is used to replace the HTML markup content of an HTML element in JavaScript?",
      answers: [
        "innerText",
        "innerHTML",
        "innerTextContent",
        "textContent"
      ],
      correctAnswer: "innerHTML"
    },
    {
      question: "Which event is triggered when the user clicks on an HTML element?",
      answers: [
        "hover",
        "click",
        "keydown",
        "change"
      ],
      correctAnswer: "click"
    },
    {
      question: "Which method is used to append a new child HTML element to an existing element in JavaScript?",
      answers: [
        "createChild",
        "addElement",
        "addNode",
        "appendChild"
      ],
      correctAnswer: "appendChild"
    },
    {
      question: "How can you remove an HTML element from the DOM using JavaScript?",
      answers: [
      "element.remove()",
      "element.delete()",
      "element.removeChild()",
      "element.erase()"
      ],
      correctAnswer: "element.remove()"
    },
    {
      question: "Which method is used to remove a child HTML element from the DOM in JavaScript?",
      answers: [
        "deleteElement",
        "removeChild",
        "removeElement",
        "removeNode"
      ],
      correctAnswer: "removeChild"
    },
    {
      question: "Which property is used to access the parent node of an HTML element in JavaScript?",
      answers: [
        "parentElement",
        "parent",
        "parentNode",
        "ancestorNode"
      ],
      correctAnswer: "parentNode"
    },
    {
      question: "Which property allows you to access the parent element of a given HTML element?",
      answers: [
      "parentNode",
      "parentElement",
      "parent()",
      "element.parent()"
      ],
      correctAnswer: "parentElement"
      },
    {
      question: "Which method is used to get the first element that matches a specified CSS selector(s) in the document?",
      answers: [
        "getElementBySelector",
        "findElement",
        "querySelector",
        "selectElement"
      ],
      correctAnswer: "querySelector"
    },
    {
      question: "Which property is used to access the value of an input element in JavaScript?",
      answers: [
        "inputValue",
        "input",
        "elementValue",
        "value"
      ],
      correctAnswer: "value"
    },
    {
      question: "What event is triggered when the user moves the mouse pointer over an HTML element?",
      answers: [
      "mouseenter",
      "mouseover",
      "mousemove",
      "mousehover"
      ],
      correctAnswer: "mouseover"
    },
    {
      question: "Which event is triggered when the user releases a key on the keyboard?",
      answers: [
        "keydown",
        "keypress",
        "keyup",
        "keyrelease"
      ],
      correctAnswer: "keyup"
    },
    {
      question: "Which method is used to insert HTML into an element in JavaScript?",
      answers: [
        "insertHTML",
        "addHTML",
        "innerHTML",
        "setHTML"
      ],
      correctAnswer: "innerHTML"
    },
    {
      question: "Which attribute is used to specify the URL of an external script file?",
      answers: [
        "href",
        "link",
        "src",
        "url"
      ],
      correctAnswer: "src"
    },
    {
      question: "Which method is used to check if a class is present on an element in JavaScript?",
      answers: [
        "hasClass()",
        "classList.contains()",
        "hasClassList()",
        "containsClass()"
      ],
      correctAnswer: "classList.contains()"
    },
    {
      question: "Which property is used to access the height of an element in JavaScript?",
      answers: [
        "clientHeight",
        "elementHeight",
        "height",
        "offsetHeight"
      ],
      correctAnswer: "clientHeight"
    },
    {
      question: "Which event is triggered when the content of an input field is changed?",
      answers: [
        "inputChange",
        "fieldChange",
        "valueChange",
        "change"
      ],
      correctAnswer: "change"
    },
    {
      question: "Which method is used to create a new HTML element in JavaScript?",
      answers: [
        "newElement",
        "createElement",
        "addNewElement",
        "makeElement"
      ],
      correctAnswer: "createElement"
    },
    {
      question: "Which property is used to access the previous sibling of an HTML element in JavaScript?",
      answers: [
        "previousElementSibling",
        "previousSibling",
        "prevSibling",
        "prevElement"
      ],
      correctAnswer: "previousElementSibling"
    },
    {
      question: "What is the correct syntax to access the first child element of an HTML element in JavaScript?",
      answers: [
        "first",
        "firstElementChild",
        "firstChild",
        "child"
      ],
      correctAnswer: "firstElementChild"
    }
  ]
};
