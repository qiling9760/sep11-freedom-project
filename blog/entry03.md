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

### Dog
I made a `dog` sprite for the game to make it more challenging. 
``` JS
// dog
    var y = rand(height());
    const amongUsOrgange = add([
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
    //
```
The `var y = rand(height());` means the dog will appear at different level of the screen each time it is created. The `dog` will move across the screen. 

Before I changed my mind to make my game has no time limit, I tried to make my game end normally at 60 seconds if the user did not collide with the `dog`, and end immediately when they collide with it. 

I made the end game part into a function, and make the `#` in `wait(#)` a variable, so I can change the time of when the game end later on.

``` JS
var time = 60;
function end () {
    wait(time, () => {
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
    })
}
```
``` JS
onCollide("cat","dog",() => {
    time = 0;
    end();
});
```
When `cat` collide with `dog`, the `time` will change to 0, and the `end` game function will run. The game will end immediately because the `wait()` will wait 0 seconds to run everything inside it. 

Later, I changed my mind about the time limit for each round and made the game only end with the user collide with the `dog`. 

``` JS
// reset game when cat touch dog
    amongUsRed.onCollide("dog",() => {
        destroyAll("cat");
        destroyAll("food");
        destroyAll("dog");
        // clearInterval(addDog);
        add([
            pos(100, 100),
            rect(200, 200),
            outline(1),
            area(),
            "button"
        ])
    })
    //
```

I also made the `dog` able to steal `cat food` and die then respond after it collide with the `wall`. 

``` JS
// dog die when touch wall and respond again
    onCollide("wall","dog",() => {
        destroyAll("dog");
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
    });
    //
```

``` JS
// dog steal food
    onCollide("dog","food",() => {
        destroyAll("food");
        catFood.value -= 1;
        catFood.text = "Cat food:" + catFood.value;
        var x = rand(width());
        var y = rand(height());
        add([
            sprite("amongUs"),
            pos(x, y),
            scale(0.1),
            area(),
            body(),
            color(120, 175, 25),
            anchor("center"),
            z(1),
            "food"
        ]);
    })
    //
```

Everything works fine except the stealing points part, for some reasons, the `dog` steal more points than I expected each time it collide on the `cat food`. I want the `dog` to steal 1 point each time it collide with the cat food, but after I restart the game, every time they collide, the dog steal more points than the previous collision.

### Goal
My goal on my tool is to figure out why the `dog` steal more points than I expected and fix it. I think I will ask on Slack to see if anyone can help me. If I have more time, I will try to add other obstacles or buff to the game.  

### EDP
I think I am still on the `planning` part and a little into the `create a prototype` part because I am still learning my tool, but I have created the basic of my game. I just need to build up and make my game more interesting. My next step is the `test and evaluate` part because I have multiple plans and ideas, but I need to test them to see which one should be added to my game and which one should be removed. 



Text

[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)