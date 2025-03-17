# Entry 4
##### 3/16/25

## Context 
My game is an interactive game where the user use their keyboard arrow keys to control a cat on the screen to collect cat food. There will be dogs to steal the cat food, and the user need to avoid the dogs and collect as many cat food as possible in a limited time. 

## Tool
### End Game 
Since resting the game just means clearing out the sprites from the screen, I made the destroying into a function. Whenever the user did something that will end the game, I will call the function.
``` JS
function resetGame () {
    destroyAll("cat");
    destroyAll("food");
    destroyAll("dog");
    add([
        pos(100, 100),
        rect(200, 200),
        outline(1),
        area(),
        "button"
    ])
}
```
### Timer 
I changed my mind back to making the game with a limited time of 60 seconds each round after I learned how to make a timer from the DOM challenge. 

There are two ways to end the game. One way the game end is to wait until the 60 seconds go off. Another way to end it is to collide with the dog.
``` JS
var time = 60;
const timer = add([
    text("Time: "),
    pos(width()-250, 25),
    z(2)
])
```
I made the timer by using `setInterval()`. This function will subtract `1` from `time` every second. Which shows time pass.  
``` JS
var timeGo = setInterval(function(){
    time = time-1;
    timer.text = "Time: " + time;
}, 1000);
```
If the user did not collide with the dog during the game, after 60 seconds, the timer and the game will reset. I made that using `setTimeout()`. This function runs after 60 seconds. 
``` JS
var endGame = setTimeout(myFunction, time*1000);
function myFunction(){
    clearInterval(timeGo);
     clearInterval(addDog);
    destroy(timer);
    resetGame();
}
```
After 60 seconds, the timer will get destroyed, and the `clearInterval(timeGo)` will stop the timer function from running, which stops the timer from counting. It will also called the `resetGame()` function to destroyed the sprites and show the restart button. 

### Add dog
I made the game add a dog every 2 seconds, and stop adding when the game end. This time the dog will destroy the cat food, but it will not steal the points. 
``` JS
var addDog = setInterval(function(){
    var y = rand(height());
    add([
        sprite("amongUs"),
        pos(0, y),
        move(0,200),
        scale(0.05),
        area(),
        body(),
        color(170, 75, 25),
        z(1),
        "dog"
    ]);
}, 2000);
```
Because there are multiple dogs on the screen at the same time, I cannot use `destroyAll("dog")` or else all the dog will disappear and not only the dog that touch the wall will disappear.

The [Kaboom Playground Collision](https://kaboomjs.com/play?example=collision) showed me how to destroy the sprite that you collide when there are multiple of them.
``` JS
player.onCollide("enemy", (enemy) => {
	destroy(enemy)
})
```
From this code, I know that I need use the `sprite.onCollide("x",(x))`. The `"x"` will be the sprite tag, and the `(x)` will be the tag with out the quotation mark. And this time, I will use the `destroy()` and not `destroyAll()`. What goes inside the `destory()` will be what I put for the `(x)`.

I know that the dog only moves right and touch the right wall, so I made the right wall into a variable, and use the method I learned from the playground to destroy the dog that collides with the right wall.
``` JS
rightWall.onCollide("dog",(dog) => {
    destroy(dog);
});
```
### End game 
If the user did collide with the dog, the game will end immediately. 
``` JS
amongUsRed.onCollide("dog",() => {
    clearTimeout(endGame);
    clearInterval(timeGo);
    clearInterval(addDog);
    destroy(timer);
    resetGame ();
})
```
When the user collide with the dog, the `clearTimeout(endGame)` will prevent the `setTimeout` function from running, which means nothing will happen after 60 seconds. Then, the timer and game will rest. 

At first, I only put `clearTimeout(endGame)` when the user collide with the dog. And the problem is since the `setTimeout` function did not run because of the `clearTimeout(endGame)`, the `clearInterval(timeGo)` and `clearInterval(addDog)` inside it did not run either. This made the timer continue counting, and the dog continue adding even after the game ended.  
``` JS
amongUsRed.onCollide("dog",() => {
    clearTimeout(endGame);
    destroy(timer);
    resetGame ();
})
```




[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)