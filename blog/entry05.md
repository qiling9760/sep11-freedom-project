# Entry 5
##### 4/27/25

## Context 
My game is an interactive game that allows the player to move a cat on the screen using keyboard keys to collect cat foods. The player needs to move the cat around to avoid the dogs that try to steal the cat food and collect as much cat food in 1 minute. The cat food that they collected can be used on another game created by my groupmates to get cats. 

## Tool
### Change the sprites 
When I was making my game, I did not have the images of the sprites that I need for my game because my groupmates were working on them. After they done with the images, I changed the sprite images to what they supposed to be. 
``` JS
loadSprite("background", "sprites/collectCatFoodBG.jpg");
const background = add([
    sprite("background"),
    anchor("center"),
    pos(center()),
    scale(1),
    fixed()
]);
```
I changed the background of my game by making the background image into a sprite and let the sprite cover up the whole screen.

I tried to make my beyond MVP (minimum valuable product) by adding a catnip to my game. The catnip's function is to increase the time of the game round. However, it did not work. 
``` JS
// collect catnip
amongUsRed.onCollide("catnip",() => {
    destroyAll("catnip");
    time += 3;
    timer.text = "Time: " + time;
})
//
```
I used the `setTimeout()` function to create the ending of the game. This function is unchangeable after it starts, so changing the `time` variable would not change the `setTimeout()` function and the time for the game to end.  

### localStorage
I wanted to save the amount of cat food the player collected on their local browser. I learned about `localStorage` on [W3Schools](https://www.w3schools.com/jsref/prop_win_localstorage.asp) and [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to do so. When the user close the window, they still have the same amount of cat food they left off when they come back.

`localStorage.setItem("catFood", catFood.value);`: This saved the cat food amount into a variable. The second blank is the item I want to save, and the first blank is the variable.

`localStorage.getItem("catFood")`: This get the value I wanted by calling the variable I saved in `localStorage.setItem()`.

``` JS
cat.onCollide("food",() => {
    destroyAll("food");
    catFood.value += 1;
    localStorage.setItem("catFood", catFood.value);
    catFood.text = "Cat food:" + localStorage.getItem("catFood");
})
```
When the cat collide with the cat food, the cat food value will increase by 1, and this value will saved into the variable `catFood` by `localStorage.setItem()`.

``` JS
const catFood = add([
    text("Cat food: " + localStorage.getItem("catFood")),
    pos(25, 25),
    z(2)
])
```
The score board will show the amount of the cat food saved in the bowser by `localStorage.getItem("catFood")`.

### Scene 
Previously, my game started right after the player open the game. But I wanted to make the game start after the player clicked on the start game button. When my classmate showed me her project, I saw her game started only after she pressed the `space` key. She told me it was because of the `scene` function. I searched on [Kaboom](https://kaboomjs.com/) and found `scene()` and `go()`. 

The `scene()` group things into a scene and run only those that are defined when that specific scene is called. 

The `go()` runs a specific scene make it run only when the start button is clicked. 

I wrapped my whole game into a scene and make it run only after the start button is clicked. 
``` JS
document.querySelector("#game").addEventListener("click",function(){
    // initialize kaboom context
    kaboom(); // start kaboom when the button is clicked
    //
    scene("gameStart", () => { // game scene
    // load a sprite from an image
        loadSprite("dog", "sprites/dog.PNG");
    .....
        game() // start the game function
    })

    // start game
    go("gameStart"); // start the scene when the button is clicked
})
```


## Skills
### Growth mindset
I had a problem when working on the `localStorage`. Whenever I closed my tab and reopen it again, my cat food value will return to 0. I had worked on it to solve this problem myself for a week but still could not find a solution, so finally I ask Mr. Mueller about this problem. He told me it was because every time my game start, I set my cat food value to 0. I need to set the starting value to the `localStorage` value if there is one. 
``` JS
function noLocalStorage(){
    if (localStorage.getItem("catFood") == null){
      return true;
    } else {
      return false;
    }
  }

if (noLocalStorage()){
catFood.value = 0;
} else {
catFood.value= Number(localStorage.getItem("catFood"));
}
```
I made a function to check if there is a `localStorage` value for cat food. If there is, then the game will use the `localStorage` value as the starting point. If not, then the starting point will be 0. 

### Collaboration 
This project is a 4 people project, and we split it into 2 parts. The one that I am working on is part A, and the other part is part B. In this part A, I need to connect what I did to what my partner did, and then connect part A to part B. My partner has created a homepage to part A of the game using HTML, and I need to make it connect to Kaboom. After I connected the homepage to the game, I also added a link on the homepage to direct the player to part B of the game. 




[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)