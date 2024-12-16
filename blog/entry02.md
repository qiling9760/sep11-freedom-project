# Entry 2
##### 12/9/24

## Context
My game is an interactive game where the user can control the character to collect points. In my game, the character is a cat, and the points are the cat food. 

## Tool
I want to allow the user to control the cat using keyboard keys. This involves two functions, `onKeyDown()` and `.move()`. 

`onKeyDown()` means while a key is hold down, an action will be performed. 

`onKeyDown("", () => {})`  
`""` Put keys inside quotation marks  
`{}` Put what will happen when that key is hold down inside the curly brackets

I combine `onKeyDown()` and `.move()` to make the sprite move when the user is holding down a key. 

``` JS
onKeyDown("left", () => {
    amongUsRed.move(-500, 0)
})
```

When `left` is pressed down, the sprite will move left.

The `move(#,#)` inside the `onKeyDown()` is different from inside the `add()`.

When I use `move(#,#)` in `add()`, the first number makes the sprite gradually moving up or down while moving towards a direction. But when it is used in the `onKeyDown()`, the first number makes the sprite move left or right. `-` sign makes it go left, no sign makes it go right. 

The second number in `move()` in `add()` makes it go left or right. `+` sign or no sign makes it go right, `-` sign makes it go left. But in `onKeyDown()`, it is used to move the sprite up or down. `-` makes it go up, no sign makes it go down.



[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)