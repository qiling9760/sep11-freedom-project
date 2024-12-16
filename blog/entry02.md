# Entry 2
##### 12/9/24

## Context
My game is an interactive game where the user can control the character to collect points. In my game, the character is a cat, and the points are the cat food. I used functions from [kaboom](https://kaboomjs.com/) to make it work. 

## Tool
### onKeyDown and move
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

### onCollide and destroy
I want to make the cat collect the cat food, which means I need to make the cat food disappear and the score board add 1 when the cat collide with the cat food. 

I used `onCollide()` and `destroy()` to make it look like the cat food is collected by the cat. 

``` JS
amongUsRed.onCollide((amongUsOrange) => {
    destroy(amongUsGreen)
})
```

This will make the cat food disappear when it collide with the cat. 

I need a score board to keep track of how many cat food the user collected. I used `text()` for the score board. 

``` JS
const catFood = add([
    text("Cat food: 0"),
    pos(24, 24),
    { value: 0 },
])
```

I want the cat to destory cat food and add 1 point to the score board every time it collide with the cat food. A new cat food will appear when the last cat food got destoryed. 

``` JS
amongUsRed.onCollide("amongUs",() => {
    destroyAll("amongUs");
    catFood.value += 1;
    catFood.text = "Cat food:" + catFood.value;
    var x = rand(width());
    var y = rand(height())
    add([
        sprite("amongUs"),
        pos(x, y),
        scale(0.1),
        area(),
        body(),
        color(120, 175, 25),
        anchor("center"),
        z(2),
        "amongUs"
    ]);
})
```
`rand()` make a random value between 0 and the value in the parenthesis.

`z()`, the sprite will cover another sprite when its `z()` number is bigger than another sprite

Whenever sprite A collide with sprite B, it destroy sprite B and add 1 point to the score board and create another sprite B in a different location. When I control sprite A to collide with the new sprite B, it will do the same thing - destroy sprite B, add 1 point, create another sprite B.

### body({ isStatic: true })
I tried to make walls wrap around the map, so the user would not accidentally go out of the map.

``` JS
add([
    pos(0, 0),
    rect(width(), 1),
    outline(1),
    area(),
    body({ isStatic: true }),
    "water"
])
```

`body({ isStatic: true })`: This makes the sprite stationary, which means other sprits cannot go through or push it foward.

`rect(width(), 1)`: The first number is the width, the second number is the height.

`width()`: The screen's width - it is a number  
`height()`: The screen's height - it is a number

## Goal
My Freedom Project goal for the winder break is to figure out how to make the game end in 1 minute. I have searched on [kaboom](https://kaboomjs.com/), and I only found `timer()` that is related to time. I need to learn how it work, and what other functions it can combine with to make my game end in 1 min. 



[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)