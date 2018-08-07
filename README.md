# Hoisting: Let Var and the Block Scope

This code snippet covers hoisting characteristics of var declaration and assignment and their influences on different scopes.

### Index
* [Learning Objective](#learning-objective)
* [Study Snippet](#study-snippet)
* [Helpful Links](#helpful-links)
* [More Practice](https://elewa-academy.github.io/12345-345)

___

## Learning Objective

Concepts to note:
Hoisting, Defining, Declaring, Visible and Scope.

Language Features:
* var 
* let
* Global Scope
* Block Scope


[TOP](#index)

___
 
## Study Snippet

```js
innerer_var = 'defined';

{
   innerer_var = 2;
  {
    var innerer_var;
  }
}

```
[PyTut](https://goo.gl/LVz4Nd)

0. JS declares "innerer_var" and _hoists_ it to the global scope.  It is now _visible_ in all other scopes.
1. JS defines "innerer_var" as {String, defined}.
2. Inside Block 1, JS defines "innerer_var" as {Number, 2}
3. Inside Block 2, JS reaches the statement where "innerer_var" was declared.  But it was already declared in the __creation phase__, so there's nothing to do.
3. Final state. "innerer_var" is still visible at the global scope, with final value {Number, 2}.

___

## with "let"


```js
let outer_let = 'defined';

{
   let inner_let = 2;
  {
    let innerer_let;
  }
}
```
[PyTut](http://www.pythontutor.com/javascript.html#code=innerer_let%20%3D%20'defined'%3B%0A%0A%7B%0A%20%20%20innerer_let%20%3D%202%3B%0A%20%20%7B%0A%20%20%20%20var%20innerer_let%3B%0A%20%20%7D%0A%7D&curInstr=0&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D)

0. Nothing happens in the __creation phase__, there are no "var" variables or functions to hoist.
1. JS _declares_ & _defines_ "outer_let" in a single statement.
2. The new block scope is created, with "inner_let" declared but in the __temporal dead zone__.
3. "inner_let" is _defined_ as "block 1". Both "outer_let" and "inner_let" are _visible_ in the block scope.
4. The second block scope is created, with "innerer_let" declared but in the __temporal dead zone__.
5. "innerer_let" is _defined_ as "block 2". Both "inner_let" and "innerer_let" are _visible_ in the block scope.
6. Both block scopes are destroyed, "inner_let" and "innerer_let" no longer exist. 
5. Final state.  "outer_let" is still there, it was _declared_ in the global scope.  "inner_let" is no longer there, it was _declared_ in the block scope and was not _hoisted_, same with "innerer_let".

[TOP](#index)

___

## Helpful Links
* Var: [MDNWebDocs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

[TOP](#index)



___
