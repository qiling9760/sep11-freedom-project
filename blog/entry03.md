# Entry 3
##### 2/9/25

## Context 
My game is an interactive game where the user can control the character to collect points. In my game, the character is a cat, and the points are the cat food. There are obstacles in the game that make the game harder, and the user need to control the cat to avoid those obstacles. I used functions from [kaboom](https://kaboomjs.com/) to make it work. 

My original plan was to make a 1 minute time limit for each round of the game. But after I learned more about Kaboom, I decided to change the game to no time limit. The new way for the user to end the game is to collide on the obstacle - a dog that moves across the screen. When the user collide on the dog, the game will end. When the dog collide with the cat food, the dog will steal 1 point from the user. This makes the game harder where the user need to avoid the dog and at the same time collect the cat food as soon as possible, so the dog won't collide on it. 

## Tool
### Wait() and Onclick
At first, I want each round of my game to end at 60 seconds, so I went to Kaboom to search for any time related components. After the game end, I also need to allow the user to restart the game. 

`wait(#, () => {})`: Actions go inside the {} and will appear after # seconds.

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
The `wait()` allows me to destory everything on the screen, which looks like the game has ended and a restart option pops up. 

When the sprite with the tag `"button"` is clicked, the button go away and the game restart.

``` JS
onClick("button", () => [
    destroyAll("button"),
    game()
])
```
I put all the code I had before into a function named `game`. The `wait()` is inside the function, so every time the function is called, the `wait()` is also activated. The sprites will disappear in 60 seconds (look like the game ended) and pop up a restart button. When the user click on the restart button, the button will go away and the function (game) run again.





Text

[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)