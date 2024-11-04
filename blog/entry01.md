# Entry 1: Collect Cat Food Game
##### 11/3/24

## My Game
For this year's Freedom Project, I decided to work with my friends to create a game about spending cat food to obtain different rarity of cats by chance. We separated the game into two parts, and we split into two teams to create each part. After we finish with our part of the game, we will combine them together at the end of our Freedom Project. I am doing Part A of the game with Ellen, and Xue and Katee are doing Part B of the game.

In **Part A**, the user will control a cat to move around a 2D tile map to collect cat food. The cat food will randomly appear on the map, and the user will control the cat using keyboard keys to get the cat food. Once the user get that cat food, another cat food will appear on the map in a different location. There are boosts on the map that help the user get the cat food, and obstacles that make the game harder.

In **Part B**, the user will use the cat food they collected to obtain cats. There will be a gunball like machine that gives out a cat once the user insert the amount of cat food needed. There are 15 cats in total, and these cats are divided into three rarities. The probability to obtain a rarity of cat is different- *Rare* cats: 75%, *Super Rare* cats: 20%, *Super Super Rare* cats: 5%. There is a chance for the user to obtain the same cat more than once. However, if the user pulls up to 50 tries and did not get any SSR cat, they are guaranteed to get a random SSR cat.

## My Tool
My tool is [**Kaboom**](https://kaboomjs.com/). I decided to use Kaboom because I learned about sprites on **Intro to CS** in 9th grade. I know that for my part of the game, I can use sprites to create the elements for my game. Kaboom allows me to create a sprite and add functions to it. I am going to use Kaboom to create a sprite that the user can interact with and make the sprites do something when they interact with other sprites.

### Kaboom
I learned how to load a sprite from an image using `loadSprite()` and create a sprite using `add()` and `sprite()`.
``` JS
const amongUsRed = add([
    sprite("amongUsRed"),
    pos(80, 40),
    scale(0.1),
    "amongUs"
]);
```
I created a variable and use `add()` to assemble it with a list of components. I use `sprite()` to make the variable become a sprite. `pos()` is where this sprite show up, and `scale()` change the size of the sprite.

I also learned other things that I can use in my game.
- `destory()` removes the game object. What goes inside the parenthesis is the game object name/variable.
- `destoryAll()` removes all game object if nothing is specify in the parenthesis. If a tag is specify, then it removes all variables with that tag.
- `rotate()` rotate the variable. What goes inside the parenthesis is the degree. 0-360.
- `color(#,#,#)` change the color of the variable, use RGB, color(R, G, B).
- `text()` add a text. A string should be inside the parenthesis.

The following functions are functions that I think will help when I want to make a sprite interactive.
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
This code makes the first sprite move right and gradually moving down while moving right. The second sprite is stationary. When `body()` of the second sprite is commented out, the first sprite goes right through the second sprite. When it is not commented out, the first sprite will push the second sprite foward when it touch with the second sprite.

The `move(#,#)`
- The first number makes the sprite gradually moving up or down while moving towards a direction.
    - The sprite will go down no matter what sign - `move(+10,20)` or `move(-10,20)` and go up when there is no sign - `move(10,20)`.
    - `move(0,20)` makes it not go up or down.
- The second number is the speed. Big number = move faster, small number = move slower, 0 = not moving at all.
    - "+" sign or no sign makes it go right `move(10,+20)`, - sign makes it go left `move(10,-20)`.







[Next](entry02.md)

[Home](../README.md)
