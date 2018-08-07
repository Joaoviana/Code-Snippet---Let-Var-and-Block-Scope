# Code-Snippet Let Var and the Block Scope

This code snippet covers hoisting characteristics of var declaration and assignment and their influences on different scopes.

### Index
* [Learning Objective](#learning-objective)
* [Study Snippet](#study-snippet)
* [Helpful Links](#helpful-links)
* [More Practice](https://elewa-academy.github.io/12345-345)

___

## Learning Objective

Language Features:
* var 
* if statements

[TOP](#index)

___
 
## Study Snippet

```js
x = 1;

if (x === 1) {
   x = 2;
  {
    var x = 3
    //expected output : 3
     console.log(x);
  }
}

//actual output : 3
console.log(x);

```
[TOP](#index)

___

## Helpful Links
* Var: [MDNWebDocs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

[TOP](#index)



___
