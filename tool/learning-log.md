# Tool Learning Log

## Tool: **Kaboom**

## Project: **Collect Cat Food**

---

### 10/19/2024:
- To set up Kaboom, copy the starter code for Kaboom in the `<script>` section.
``` JS
<script src="https://unpkg.com/kaboom@3000.0.1/dist/kaboom.js"></script>
<script>
// initialize kaboom context
kaboom();
</scirpt>
```

- Load a sprite from an image using `loadSprite()`. The `amongUsRed` is the sprite name, the `sprites/amongUsRed.jpg` is the sprite image.
``` JS
loadSprite("amongUsRed", "sprites/amongUsRed.jpg");
```
At first, I copied the code `loadSprite("bean", "sprites/bean.png")` from the Kaboom website, but when I run the code, it pop up error and said cannot find `sprites/bean.png`, so I made a `sprites` folder, upload an imgae myself, and change the name of the image.

- Make a variable for the sprite and give it properties.
- `add()` assemble a game object from a list of components.
- `sprite()` which sprite will this variable be.
- `pos`() where this sprite show up. What goes inside the parenthesis is the `x-coordinate` and `y-coordinate`.
- `scale()` change the size of the variale.
- `"amongUs"` is a tag, it describe the behaviors for a group of objects. Multiple variables can have the same tag. A variable can have multiple tags. (I think it is like a class in CSS).
``` JS
const amongUsRed = add([
    sprite("amongUsRed"),
    pos(80, 40),
    scale(0.1),
    "amongUs"
]);
```
- `destory()` removes the game object. What goes inside the parenthesis is the game object name/variable. `destory(amongUsRed)`.
   - I gave a sprite a tag called `"amongUs"` and wrote `destory("amongUs")` but it pop up `script error` when I run the code, so I think you can only put in variable in the parenthesis.
- `destoryAll()` removes all game object if nothing is specify in the parenthesis. If a tag is specify, then it removes all variables with that tag. `destoryAll("amongUs")`.
    - I made 3 sprites and gave 2 of the them same tag `"amongUs"`, and the sprites with the tag `"amongUs"` did not show up when I run this code.
    - I command out this code and wrote a new code `destoryAll()` and nothing showed up.
- `rotate()` rotate the variable. What goes inside the parenthesis is the degree. `0-360`.
- `color(#,#,#)` change the color of the variable, use `RGB`, `color(R, G, B)`.


### 10/23/24:
- `text()` add a text. A string should be inside the parenthesis.
    - When I put `text(Score:0)`, nothing shows up. Not even the sprite.
- `area()` generates collider area from shape and enables collision detection.
- `body()` makes the object "solid".
- `move()` make a sprite move towards a direction infinitely.

``` JS
const amongUsRed = add([
    sprite("amongUs"),
    pos(100, 400),
    area(),
    scale(0.1),
    body(),
    move(+5, 20)
])

const amongUsGreen = add([
    sprite("amongUs"),
    pos(290, 400),
    scale(0.1),
    area(),
    // body(),
    color(0, 0, 255),
    "amongUs"
]);
```
- At first I try to put "move(right, 20)" because on Kaboom, it says "direction" for the first input. But when I run the code, it says cannot define the variable "right". Then I read it again and see it says "direction: number", so I input "+5" because I want it to go right way. But I don't know why I put "-5" it won't go left. When the sprite move, it pushes the other sprite that is stationary and makes it move with it. So I commented the "body ()" for the second sprite to make it not have a solid shape. And when I run the code,  the first sprite go right through the second sprite.

### 10/27/24
- I continue my tinker on `move(#,#)`. I change the signs of the numbers to see the difference.
    - The first number makes the sprite gradually moving up or down while moving towards a direction.
        - The weird thing is that the sprite will go down no matter what sign I put - `move(+10,20)` or `move(-10,20)`.
        - But it will go up if I put no sign - `move(10,20)`.
        - `move(0,20)` makes it not go up or down.
    - The second number is the speed. Big number = move faster, small number = move slower, 0 = not moving at all.
        - `+` sign or no sign makes it go right `move(10,+20)`, `-` sign makes it go left `move(10,-20)`.
### 11/11/24
- I am learning about `.onCollide("", () => {})`. I want to know what should I put inside `""`, `()`, and `{}`, and what happens if I change the things inside them. `.onCollide` only works when the sprites have both the `area()` and `body`. Because if the sprites don't have the body, they will go through each other and do not touch, so no collision.
    - `""` Put tags inside quotation marks.
    - `()` Put variable name inside parenthesis.
    - `{}` Put what happens when variables collide inside currly brackets.
``` JS
amongUsRed.onCollide("amongUs", () => {
            destroy(amongUsOrange)
})
 ```
If `amongUsRed` collide with sprites that have the tag `"amongUs"`, `amongUsOrange` will be destoryed. I can write nothing or anything in the parenthesis, it work the same thing as long as I have the tag. But I need to have the parenthesis or else the screen goes blank.

``` JS
amongUsRed.onCollide((amongUsOrange) => {
                destroy(amongUsGreen)
})
```
If `amongUsRed` collide with the sprite `amongUsOrange`, `amongUsGreen` will be destoryed. I don't need the `""` in front of the `()`.

### 11/18/24
- `.OnCollide("", ()=>{})`: The controlling sprite will destory the sprite it coliide with no matter what sprite it is when the variable in the parenthesis is the same as the variable in the `destory()` parenthesis inside the curly brackets.
``` JS
amongUsRed.onCollide((amongUsOrange) => {
            destroy(amongUsOrange)
})
```

- `onKeyDown("", () => {})`
    - `""` Put keys inside quotation marks
    - `{}` Put what happens when that key is hold down inside the curly brackets

### 11/24/24
``` JS
onKeyDown("left", () => {
    amongUsRed.move(-500, 0)
})
```
When `left` is pressed down, the sprite will move left.
- The `move(#,#)` inside the `onKeyDown` is different from inside the `add()`.
- The first number makes the sprite move left or right. `-` makes it go left, no sign makes it go right.
- The second number makes the sprite move up or down. `-` makes it go up, no sign makes it go down.


``` JS
const catFood = add([
    text("Cat food: 0"),
    pos(24, 24),
    { value: 0 },
])
```
- `text()` makes a text.
- `value` assign the variable with an initial value.

`onCollide` and `text` can be combined together to make a scoreboard to keep track of how many cat food the user collect.

``` JS
amongUsRed.onCollide("amongUs",() => {
    destroyAll("amongUs");
    catFood.value += 1;
    catFood.text = "Cat food:" + catFood.value;
})
```

### 12/1/24
Whenever sprite A collide with sprite B, it destroy sprite B and add 1 point to the score board and create another sprite B in a different location. When I control sprite A to collide with the new sprite B, it will do the same thing - destroy sprite B, add 1 point, create another sprite B.
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
`rand()` will make a random value between 0 and the value in the parenthesis. 

### 12/8/24
I made 4 stationary rectangles that wrap around the map, so my sprite cannot go out of the screen. 

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

### 1/1/24
I need to make my game end in 60 seconds and allow the user to restart the game by clicking the restart button. 

``` JS
wait(60, () => {
    destroyAll("cat");
    destroyAll("food");
    add([
        pos(100, 100),
        rect(200, 200),
        outline(1),
        area(),
        "button"
    ])
})
```
`wait(#, () => {})`: Actions go inside the `{}` and will appear after `#` seconds. 

When the sprite with the tag `"button"` is clicked, the button go away and the game restart. 

``` JS
onClick("button", () => [
    destroyAll("button"),
    game()
])
``` 

The `""` is the tag.   
When there are multiple events for one action, use the `[]` and put the actions inside the `[]` after the `=>`. 


I made my game into a function. The `wait()` is inside the function, so every time the function is called, the sprites will disappear in 60 seconds (look like the game ended) and pop up a restart button. When the user click on the restart button, the button go away and the game run again. 






<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
