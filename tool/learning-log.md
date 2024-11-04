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
)];
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
        - `+` sign or no sign makes it go right `move(+10,20)`, `-` sign makes it go left `move(-10,20)`.
        


<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
