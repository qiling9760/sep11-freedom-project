// initialize kaboom context
kaboom();
//

// load a sprite from an image
loadSprite("amongUs", "sprites/amongUsRed.jpg");
loadSprite("background", "sprites/background.jpg");
loadSprite("catfood", "sprites/catFood.png");
//


// Walls to not let the sprite go out of the screen
add([
    pos(0, 0),
    rect(width(), 1),
    outline(1),
    area(),
    body({ isStatic: true }),
    "wall"
])

add([
    pos(0, height()),
    rect(width(), 1),
    outline(1),
    area(),
    body({ isStatic: true }),
    "wall"
])

add([
    pos(0, 0),
    rect(1, height()),
    outline(1),
    area(),
    body({ isStatic: true }),
    "wall"
])

const rightWall = add([
    pos(width(), 0),
    rect(1, height()),
    outline(1),
    area(),
    body({ isStatic: true }),
    "wall"
])
//

// make a score
const catFood = add([
    text("Cat food: " + localStorage.getItem("catFood")),
    pos(25, 25),
    z(2)
])
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

// localStorage.removeItem("catFood");
//


// game
function game () {
    // variables
    var time = 10;
    var x = rand(width());
    var y = rand(height());
    //

    // background
    const background = add([
        sprite("background"),
        anchor("center"),
        pos(center()),
        scale(1),
        fixed()
      ]);

    // cat
    const amongUsRed = add([
        sprite("amongUs"),
        pos(width()/2, height()/2),
        area(),
        scale(0.1),
        body(),
        z(1),
        offscreen({pause:false}),
        "cat"
    ]);
    //

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

    // // Catnip
    // const amongUsPurple = add([
    //     sprite("amongUs"),
    //     pos(400,200),
    //     scale(0.05),
    //     area(),
    //     body(),
    //     color(128, 0, 128),
    //     z(1),
    //     "catnip"
    // ]);
    // //


    // cat food
    const catfood = add([
        sprite("catfood"),
        pos(x, y),
        anchor("center"),
        scale(0.1),
        area(),
        body(),
        z(1),
        "food"
    ]);
    //

    // move cat
    onKeyDown("left", () => {
            amongUsRed.move(-500, 0)
    })
    onKeyDown("a", () => {
        amongUsRed.move(-500, 0)
    })
    onKeyDown("right", () => {
            amongUsRed.move(500, 0)
    })
    onKeyDown("d", () => {
            amongUsRed.move(500, 0)
    })
    onKeyDown("up",() => {
            amongUsRed.move(0, -500)
    })
    onKeyDown("w",() => {
            amongUsRed.move(0, -500)
    })
    onKeyDown("down",() => {
            amongUsRed.move(0, 500)
    })
    onKeyDown("s",() => {
        amongUsRed.move(0, 500)
    })
    //

    // collect cat food
    amongUsRed.onCollide("food",() => {
        destroyAll("food");
        catFood.value += 1;
        localStorage.setItem("catFood", catFood.value);
        catFood.text = "Cat food:" + localStorage.getItem("catFood");
        var x = rand(width());
        var y = rand(height());
        add([
            sprite("catfood"),
            pos(x, y),
            scale(0.1),
            area(),
            body(),
            anchor("center"),
            z(1),
            "food"
        ]);
    })
    //

    // // collect catnip
    // amongUsRed.onCollide("catnip",() => {
    //     destroyAll("catnip");
    //     time += 3;
    //     timer.text = "Time: " + time;
    //     changeTime = true;
    //     changeEndTime();
    // })
    // //

    // Add dog 2s
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


    // dog die when touch wall and respond again
    rightWall.onCollide("dog",(dog) => {
        destroy(dog);
    });

    // dog steal food (still have use)
    onCollide("dog","food",() => {
        destroyAll("food");
        var x = rand(width());
        var y = rand(height());
        add([
            sprite("catfood"),
            pos(x, y),
            scale(0.1),
            area(),
            body(),
            anchor("center"),
            z(1),
            "food"
        ]);
    })
    //

    // dog steal catnip
    onCollide("dog","catnip",() => {
        destroyAll("catnip");
    })
    //

    // reset game
    function resetGame () {
        destroyAll("cat");
        destroyAll("food");
        destroyAll("dog");
        destroyAll("catnip");
        add([
            pos(100, 100),
            rect(200, 200),
            outline(1),
            area(),
            "button"
        ])
    }

    // restart game in 60s
    const timer = add([
        text("Time: "),
        pos(width()-250, 25),
        z(2)
    ])
    var timeGo = setInterval(function(){
        time = time-1;
        timer.text = "Time: " + time;
    }, 1000);

    var endGame = setTimeout(function(){
        clearInterval(timeGo);
        clearInterval(addDog);
        destroy(timer);
        resetGame ();
    }, (time*1000));


    // rest game when cat touch dog
    amongUsRed.onCollide("dog",() => {
        // clearTimeout(happy);
        clearTimeout(endGame);
        clearInterval(timeGo);
        clearInterval(addDog);
        destroy(timer);
        resetGame ();
    })
    //

}
game()

// restart button
onClick("button", () => [
    destroyAll("button"),
    game()
])
//






